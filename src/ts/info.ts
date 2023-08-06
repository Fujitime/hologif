const fetchData = async (url: string): Promise<string> => {
    try {
      const response = await fetch(url);
      return await response.text();
    } catch (error) {
      console.error('Failed to fetch data:', error);
      return '';
    }
  };
  
  const createHTMLFromText = (text: string): DocumentFragment => {
    const template = document.createElement('template');
    template.innerHTML = text;
    return template.content;
  };
  
  export const initModal = (): void => {
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalButton = document.getElementById('closeModal');
    const openModalButton = document.getElementById('openModal');
    const modalText = document.getElementById('modalText');
  
    if (modalOverlay && closeModalButton && openModalButton && modalText) {
      openModalButton.addEventListener('click', async () => {
        const text = await fetchData('/text.txt');
        const htmlContent = createHTMLFromText(text);
  
        modalText.innerHTML = '';
        modalText.appendChild(htmlContent);
        
        modalOverlay.style.display = 'flex';
      });
  
      closeModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
      });
    } else {
      console.error('One or more elements not found in the DOM');
    }
  };
  