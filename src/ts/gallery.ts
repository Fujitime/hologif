import { getDataFromCacheOrFetch } from "./api";

export interface HololiveMember {
  id: number;
  name: string;
  gif: string;
}

const fetchHololiveMember = async (id: number): Promise<HololiveMember | null> => {
  try {
    const endpoint = `/?id=${id}&format=gif`;
    const gifData = await getDataFromCacheOrFetch(`gifData-${id}`, endpoint);

    if (!gifData) {
      console.error(`Failed to fetch data for Hololive member with ID ${id}`);
      return null;
    }

    const { gif, name } = gifData;
    return { id, name, gif };
  } catch (error) {
    console.error(`Error fetching data for Hololive member with ID ${id}:`, error);
    return null;
  }
};


const initGallery = async () => {
  const galleryElement = document.getElementById('gallery');
  if (!galleryElement) {
    console.error('Gallery element not found!');
    return;
  }

  const storedMembers = JSON.parse(localStorage.getItem('hololiveMembers') || '[]');

  for (let id = 1; id <= 31; id++) {
    const member = await fetchHololiveMember(id);
    if (member) {
      const div = document.createElement('div');
      div.className = 'gallery-item';

      const img = document.createElement('img');
      img.src = member.gif;
      img.alt = member.name;
      img.classList.add('gallery-gif');

      div.appendChild(img);
      galleryElement.appendChild(div);

      storedMembers.push(member);
      localStorage.setItem('hololiveMembers', JSON.stringify(storedMembers));

      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }

  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
};


export default initGallery;
