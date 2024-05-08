import './pagination.scss';
import './pagination-layout.scss';


function Pagination() {
  return (
    <>
      <h1>Pagination</h1>
        <div className='pagination'>
            
        </div>
        <nav>
        <ul class="pagination">
          <li class="page-item"> 
              <a class="page-previous" href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5999 12.7108C10.5061 12.6178 10.4317 12.5072 10.381 12.3854C10.3302 12.2635 10.3041 12.1328 10.3041 12.0008C10.3041 11.8688 10.3302 11.7381 10.381 11.6162C10.4317 11.4944 10.5061 11.3838 10.5999 11.2908L15.1899 6.71079C15.2836 6.61783 15.358 6.50723 15.4088 6.38537C15.4595 6.26351 15.4857 6.1328 15.4857 6.00079C15.4857 5.86878 15.4595 5.73808 15.4088 5.61622C15.358 5.49436 15.2836 5.38376 15.1899 5.29079C15.0025 5.10454 14.749 5 14.4849 5C14.2207 5 13.9672 5.10454 13.7799 5.29079L9.18986 9.88079C8.62806 10.4433 8.3125 11.2058 8.3125 12.0008C8.3125 12.7958 8.62806 13.5583 9.18986 14.1208L13.7799 18.7108C13.9661 18.8955 14.2175 18.9997 14.4799 19.0008C14.6115 19.0016 14.7419 18.9763 14.8638 18.9266C14.9856 18.8768 15.0964 18.8035 15.1899 18.7108C15.2836 18.6178 15.358 18.5072 15.4088 18.3854C15.4595 18.2635 15.4857 18.1328 15.4857 18.0008C15.4857 17.8688 15.4595 17.7381 15.4088 17.6162C15.358 17.4944 15.2836 17.3838 15.1899 17.2908L10.5999 12.7108Z" fill="#1B242C"/>
                  </svg>
              </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
              <a class="page-next" href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3974 9.88079L10.8074 5.29079C10.62 5.10454 10.3665 5 10.1024 5C9.83818 5 9.58472 5.10454 9.39736 5.29079C9.30363 5.38376 9.22924 5.49436 9.17847 5.61622C9.1277 5.73808 9.10156 5.86878 9.10156 6.00079C9.10156 6.1328 9.1277 6.26351 9.17847 6.38537C9.22924 6.50723 9.30363 6.61783 9.39736 6.71079L13.9974 11.2908C14.0911 11.3838 14.1655 11.4944 14.2163 11.6162C14.267 11.7381 14.2932 11.8688 14.2932 12.0008C14.2932 12.1328 14.267 12.2635 14.2163 12.3854C14.1655 12.5072 14.0911 12.6178 13.9974 12.7108L9.39736 17.2908C9.20906 17.4778 9.10274 17.7319 9.1018 17.9973C9.10087 18.2626 9.20538 18.5175 9.39236 18.7058C9.57934 18.8941 9.83346 19.0004 10.0988 19.0014C10.3642 19.0023 10.6191 18.8978 10.8074 18.7108L15.3974 14.1208C15.9592 13.5583 16.2747 12.7958 16.2747 12.0008C16.2747 11.2058 15.9592 10.4433 15.3974 9.88079Z" fill="#1B242C"/>
</svg>

              </a>
            </li>
        </ul>

        <ul class="pagination pagination-soft">
          <li class="page-item"> 
              <a class="page-previous" href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5999 12.7108C10.5061 12.6178 10.4317 12.5072 10.381 12.3854C10.3302 12.2635 10.3041 12.1328 10.3041 12.0008C10.3041 11.8688 10.3302 11.7381 10.381 11.6162C10.4317 11.4944 10.5061 11.3838 10.5999 11.2908L15.1899 6.71079C15.2836 6.61783 15.358 6.50723 15.4088 6.38537C15.4595 6.26351 15.4857 6.1328 15.4857 6.00079C15.4857 5.86878 15.4595 5.73808 15.4088 5.61622C15.358 5.49436 15.2836 5.38376 15.1899 5.29079C15.0025 5.10454 14.749 5 14.4849 5C14.2207 5 13.9672 5.10454 13.7799 5.29079L9.18986 9.88079C8.62806 10.4433 8.3125 11.2058 8.3125 12.0008C8.3125 12.7958 8.62806 13.5583 9.18986 14.1208L13.7799 18.7108C13.9661 18.8955 14.2175 18.9997 14.4799 19.0008C14.6115 19.0016 14.7419 18.9763 14.8638 18.9266C14.9856 18.8768 15.0964 18.8035 15.1899 18.7108C15.2836 18.6178 15.358 18.5072 15.4088 18.3854C15.4595 18.2635 15.4857 18.1328 15.4857 18.0008C15.4857 17.8688 15.4595 17.7381 15.4088 17.6162C15.358 17.4944 15.2836 17.3838 15.1899 17.2908L10.5999 12.7108Z" fill="#1B242C"/>
                  </svg>
              </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
              <a class="page-next" href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3974 9.88079L10.8074 5.29079C10.62 5.10454 10.3665 5 10.1024 5C9.83818 5 9.58472 5.10454 9.39736 5.29079C9.30363 5.38376 9.22924 5.49436 9.17847 5.61622C9.1277 5.73808 9.10156 5.86878 9.10156 6.00079C9.10156 6.1328 9.1277 6.26351 9.17847 6.38537C9.22924 6.50723 9.30363 6.61783 9.39736 6.71079L13.9974 11.2908C14.0911 11.3838 14.1655 11.4944 14.2163 11.6162C14.267 11.7381 14.2932 11.8688 14.2932 12.0008C14.2932 12.1328 14.267 12.2635 14.2163 12.3854C14.1655 12.5072 14.0911 12.6178 13.9974 12.7108L9.39736 17.2908C9.20906 17.4778 9.10274 17.7319 9.1018 17.9973C9.10087 18.2626 9.20538 18.5175 9.39236 18.7058C9.57934 18.8941 9.83346 19.0004 10.0988 19.0014C10.3642 19.0023 10.6191 18.8978 10.8074 18.7108L15.3974 14.1208C15.9592 13.5583 16.2747 12.7958 16.2747 12.0008C16.2747 11.2058 15.9592 10.4433 15.3974 9.88079Z" fill="#1B242C"/>
</svg>

              </a>
            </li>
        </ul>

        <ul class="pagination pagination-round">
          <li class="page-item"> 
              <a class="page-previous" href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5999 12.7108C10.5061 12.6178 10.4317 12.5072 10.381 12.3854C10.3302 12.2635 10.3041 12.1328 10.3041 12.0008C10.3041 11.8688 10.3302 11.7381 10.381 11.6162C10.4317 11.4944 10.5061 11.3838 10.5999 11.2908L15.1899 6.71079C15.2836 6.61783 15.358 6.50723 15.4088 6.38537C15.4595 6.26351 15.4857 6.1328 15.4857 6.00079C15.4857 5.86878 15.4595 5.73808 15.4088 5.61622C15.358 5.49436 15.2836 5.38376 15.1899 5.29079C15.0025 5.10454 14.749 5 14.4849 5C14.2207 5 13.9672 5.10454 13.7799 5.29079L9.18986 9.88079C8.62806 10.4433 8.3125 11.2058 8.3125 12.0008C8.3125 12.7958 8.62806 13.5583 9.18986 14.1208L13.7799 18.7108C13.9661 18.8955 14.2175 18.9997 14.4799 19.0008C14.6115 19.0016 14.7419 18.9763 14.8638 18.9266C14.9856 18.8768 15.0964 18.8035 15.1899 18.7108C15.2836 18.6178 15.358 18.5072 15.4088 18.3854C15.4595 18.2635 15.4857 18.1328 15.4857 18.0008C15.4857 17.8688 15.4595 17.7381 15.4088 17.6162C15.358 17.4944 15.2836 17.3838 15.1899 17.2908L10.5999 12.7108Z" fill="#1B242C"/>
                  </svg>
              </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
              <a class="page-next" href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3974 9.88079L10.8074 5.29079C10.62 5.10454 10.3665 5 10.1024 5C9.83818 5 9.58472 5.10454 9.39736 5.29079C9.30363 5.38376 9.22924 5.49436 9.17847 5.61622C9.1277 5.73808 9.10156 5.86878 9.10156 6.00079C9.10156 6.1328 9.1277 6.26351 9.17847 6.38537C9.22924 6.50723 9.30363 6.61783 9.39736 6.71079L13.9974 11.2908C14.0911 11.3838 14.1655 11.4944 14.2163 11.6162C14.267 11.7381 14.2932 11.8688 14.2932 12.0008C14.2932 12.1328 14.267 12.2635 14.2163 12.3854C14.1655 12.5072 14.0911 12.6178 13.9974 12.7108L9.39736 17.2908C9.20906 17.4778 9.10274 17.7319 9.1018 17.9973C9.10087 18.2626 9.20538 18.5175 9.39236 18.7058C9.57934 18.8941 9.83346 19.0004 10.0988 19.0014C10.3642 19.0023 10.6191 18.8978 10.8074 18.7108L15.3974 14.1208C15.9592 13.5583 16.2747 12.7958 16.2747 12.0008C16.2747 11.2058 15.9592 10.4433 15.3974 9.88079Z" fill="#1B242C"/>
</svg>

              </a>
            </li>
        </ul>

        <ul class="pagination pagination-rounded">
          <li class="page-item"> 
              <a class="page-previous" href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5999 12.7108C10.5061 12.6178 10.4317 12.5072 10.381 12.3854C10.3302 12.2635 10.3041 12.1328 10.3041 12.0008C10.3041 11.8688 10.3302 11.7381 10.381 11.6162C10.4317 11.4944 10.5061 11.3838 10.5999 11.2908L15.1899 6.71079C15.2836 6.61783 15.358 6.50723 15.4088 6.38537C15.4595 6.26351 15.4857 6.1328 15.4857 6.00079C15.4857 5.86878 15.4595 5.73808 15.4088 5.61622C15.358 5.49436 15.2836 5.38376 15.1899 5.29079C15.0025 5.10454 14.749 5 14.4849 5C14.2207 5 13.9672 5.10454 13.7799 5.29079L9.18986 9.88079C8.62806 10.4433 8.3125 11.2058 8.3125 12.0008C8.3125 12.7958 8.62806 13.5583 9.18986 14.1208L13.7799 18.7108C13.9661 18.8955 14.2175 18.9997 14.4799 19.0008C14.6115 19.0016 14.7419 18.9763 14.8638 18.9266C14.9856 18.8768 15.0964 18.8035 15.1899 18.7108C15.2836 18.6178 15.358 18.5072 15.4088 18.3854C15.4595 18.2635 15.4857 18.1328 15.4857 18.0008C15.4857 17.8688 15.4595 17.7381 15.4088 17.6162C15.358 17.4944 15.2836 17.3838 15.1899 17.2908L10.5999 12.7108Z" fill="#1B242C"/>
                  </svg>
              </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
              <a class="page-next" href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3974 9.88079L10.8074 5.29079C10.62 5.10454 10.3665 5 10.1024 5C9.83818 5 9.58472 5.10454 9.39736 5.29079C9.30363 5.38376 9.22924 5.49436 9.17847 5.61622C9.1277 5.73808 9.10156 5.86878 9.10156 6.00079C9.10156 6.1328 9.1277 6.26351 9.17847 6.38537C9.22924 6.50723 9.30363 6.61783 9.39736 6.71079L13.9974 11.2908C14.0911 11.3838 14.1655 11.4944 14.2163 11.6162C14.267 11.7381 14.2932 11.8688 14.2932 12.0008C14.2932 12.1328 14.267 12.2635 14.2163 12.3854C14.1655 12.5072 14.0911 12.6178 13.9974 12.7108L9.39736 17.2908C9.20906 17.4778 9.10274 17.7319 9.1018 17.9973C9.10087 18.2626 9.20538 18.5175 9.39236 18.7058C9.57934 18.8941 9.83346 19.0004 10.0988 19.0014C10.3642 19.0023 10.6191 18.8978 10.8074 18.7108L15.3974 14.1208C15.9592 13.5583 16.2747 12.7958 16.2747 12.0008C16.2747 11.2058 15.9592 10.4433 15.3974 9.88079Z" fill="#1B242C"/>
</svg>

              </a>
            </li>
        </ul>
      </nav>
    </>

  );
}

export default Pagination;
