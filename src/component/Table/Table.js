import './table.scss';
import './table-layout.scss';
import AvaterImg from "../../assets/images/avatar-img.png";


function Table() {
    return (
        <>
            <h1>Table</h1>

            <div className='table-responsive'>
                <table cellPadding="0" cellSpacing="0" class="table">
                    <thead>
                        <tr>
                            <th>Head</th>
                            <th>Head</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td><span className='text-green'>Active</span></td>
                            <td>
                                <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1148 2.53733L17.4646 0.886791C17.1836 0.605653 16.8501 0.382633 16.4829 0.230475C16.1158 0.0783163 15.7223 0 15.3248 0C14.9274 0 14.5339 0.0783163 14.1668 0.230475C13.7996 0.382633 13.4661 0.605653 13.1851 0.886791L0.871984 13.1998C0.745683 13.3328 0.667296 13.5041 0.649209 13.6867L0.00563678 19.0784C-0.0080105 19.1946 0.00319165 19.3124 0.0385004 19.4239C0.0738091 19.5354 0.132418 19.6381 0.210439 19.7253C0.288461 19.8124 0.384114 19.882 0.491054 19.9293C0.597994 19.9767 0.713778 20.0008 0.830729 20H0.92699L6.31484 19.3535C6.49909 19.3317 6.67059 19.2483 6.80165 19.1169L19.1148 6.81496C19.6816 6.24755 20 5.47826 20 4.67614C20 3.87403 19.6816 3.10474 19.1148 2.53733ZM5.83904 17.7608L1.76583 18.2367L2.24164 14.1626L11.4524 4.94986L15.0498 8.54802L5.83904 17.7608ZM17.9404 5.65684L16.2159 7.37889L12.6213 3.78348L14.3512 2.05317C14.6091 1.79531 14.9588 1.65046 15.3235 1.65046C15.6881 1.65046 16.0378 1.79531 16.2957 2.05317L17.9459 3.7037C18.2041 3.96127 18.3494 4.31085 18.3499 4.67557C18.3504 5.04029 18.2061 5.39028 17.9486 5.64858L17.9404 5.65684Z" fill="#555F6D" />
                                    </svg>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td><span className='text-green'>Active</span></td>
                            <td>
                                <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1148 2.53733L17.4646 0.886791C17.1836 0.605653 16.8501 0.382633 16.4829 0.230475C16.1158 0.0783163 15.7223 0 15.3248 0C14.9274 0 14.5339 0.0783163 14.1668 0.230475C13.7996 0.382633 13.4661 0.605653 13.1851 0.886791L0.871984 13.1998C0.745683 13.3328 0.667296 13.5041 0.649209 13.6867L0.00563678 19.0784C-0.0080105 19.1946 0.00319165 19.3124 0.0385004 19.4239C0.0738091 19.5354 0.132418 19.6381 0.210439 19.7253C0.288461 19.8124 0.384114 19.882 0.491054 19.9293C0.597994 19.9767 0.713778 20.0008 0.830729 20H0.92699L6.31484 19.3535C6.49909 19.3317 6.67059 19.2483 6.80165 19.1169L19.1148 6.81496C19.6816 6.24755 20 5.47826 20 4.67614C20 3.87403 19.6816 3.10474 19.1148 2.53733ZM5.83904 17.7608L1.76583 18.2367L2.24164 14.1626L11.4524 4.94986L15.0498 8.54802L5.83904 17.7608ZM17.9404 5.65684L16.2159 7.37889L12.6213 3.78348L14.3512 2.05317C14.6091 1.79531 14.9588 1.65046 15.3235 1.65046C15.6881 1.65046 16.0378 1.79531 16.2957 2.05317L17.9459 3.7037C18.2041 3.96127 18.3494 4.31085 18.3499 4.67557C18.3504 5.04029 18.2061 5.39028 17.9486 5.64858L17.9404 5.65684Z" fill="#555F6D" />
                                    </svg>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td><span className='text-green'>Active</span></td>
                            <td>
                                <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1148 2.53733L17.4646 0.886791C17.1836 0.605653 16.8501 0.382633 16.4829 0.230475C16.1158 0.0783163 15.7223 0 15.3248 0C14.9274 0 14.5339 0.0783163 14.1668 0.230475C13.7996 0.382633 13.4661 0.605653 13.1851 0.886791L0.871984 13.1998C0.745683 13.3328 0.667296 13.5041 0.649209 13.6867L0.00563678 19.0784C-0.0080105 19.1946 0.00319165 19.3124 0.0385004 19.4239C0.0738091 19.5354 0.132418 19.6381 0.210439 19.7253C0.288461 19.8124 0.384114 19.882 0.491054 19.9293C0.597994 19.9767 0.713778 20.0008 0.830729 20H0.92699L6.31484 19.3535C6.49909 19.3317 6.67059 19.2483 6.80165 19.1169L19.1148 6.81496C19.6816 6.24755 20 5.47826 20 4.67614C20 3.87403 19.6816 3.10474 19.1148 2.53733ZM5.83904 17.7608L1.76583 18.2367L2.24164 14.1626L11.4524 4.94986L15.0498 8.54802L5.83904 17.7608ZM17.9404 5.65684L16.2159 7.37889L12.6213 3.78348L14.3512 2.05317C14.6091 1.79531 14.9588 1.65046 15.3235 1.65046C15.6881 1.65046 16.0378 1.79531 16.2957 2.05317L17.9459 3.7037C18.2041 3.96127 18.3494 4.31085 18.3499 4.67557C18.3504 5.04029 18.2061 5.39028 17.9486 5.64858L17.9404 5.65684Z" fill="#555F6D" />
                                    </svg>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

     <br/>
            <div className='table-responsive'>
                <table cellPadding="0" cellSpacing="0" class="table table-v2">
                    <thead>
                        <tr>
                            <th>Head</th>
                            <th>Head</th>
                            <th>Head</th>
                            <th>Head</th>
                            <th>Head</th>
                            <th>Head</th>
                            <th>Head</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data Item</td>
                            <td>Data Item</td>
                           <td>
                           <div className='user-deatils-bx'>
                               <img src={AvaterImg}/>
                                <div className='user-details'>
                                <span className='name'>Nikita Singh</span>
                                       <span className='email'>nikita.singh@gmail.com</span>
                               </div>           
                            </div>
                           </td>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td><span className='text-new'>New</span></td>
                            <td>
                              <div className='action-bx'>
                              <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1148 2.53733L17.4646 0.886791C17.1836 0.605653 16.8501 0.382633 16.4829 0.230475C16.1158 0.0783163 15.7223 0 15.3248 0C14.9274 0 14.5339 0.0783163 14.1668 0.230475C13.7996 0.382633 13.4661 0.605653 13.1851 0.886791L0.871984 13.1998C0.745683 13.3328 0.667296 13.5041 0.649209 13.6867L0.00563678 19.0784C-0.0080105 19.1946 0.00319165 19.3124 0.0385004 19.4239C0.0738091 19.5354 0.132418 19.6381 0.210439 19.7253C0.288461 19.8124 0.384114 19.882 0.491054 19.9293C0.597994 19.9767 0.713778 20.0008 0.830729 20H0.92699L6.31484 19.3535C6.49909 19.3317 6.67059 19.2483 6.80165 19.1169L19.1148 6.81496C19.6816 6.24755 20 5.47826 20 4.67614C20 3.87403 19.6816 3.10474 19.1148 2.53733ZM5.83904 17.7608L1.76583 18.2367L2.24164 14.1626L11.4524 4.94986L15.0498 8.54802L5.83904 17.7608ZM17.9404 5.65684L16.2159 7.37889L12.6213 3.78348L14.3512 2.05317C14.6091 1.79531 14.9588 1.65046 15.3235 1.65046C15.6881 1.65046 16.0378 1.79531 16.2957 2.05317L17.9459 3.7037C18.2041 3.96127 18.3494 4.31085 18.3499 4.67557C18.3504 5.04029 18.2061 5.39028 17.9486 5.64858L17.9404 5.65684Z" fill="#555F6D" />
                                    </svg>
                                </a>
                                <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_176_1612)">
                                            <path d="M19.1667 9.16667C18.9457 9.16667 18.7337 9.25446 18.5774 9.41074C18.4211 9.56702 18.3333 9.77899 18.3333 10V15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V7.55917L7.05417 12.9467C7.83675 13.7213 8.89297 14.1565 9.99412 14.1581C11.0953 14.1597 12.1527 13.7274 12.9375 12.955L13.6725 12.2642C13.7522 12.1882 13.8161 12.0972 13.8605 11.9963C13.9048 11.8955 13.9288 11.7869 13.9309 11.6768C13.933 11.5667 13.9133 11.4572 13.8728 11.3548C13.8324 11.2523 13.772 11.1589 13.6952 11.0799C13.6185 11.001 13.5268 10.938 13.4255 10.8947C13.3243 10.8513 13.2154 10.8285 13.1053 10.8275C12.9951 10.8265 12.8859 10.8473 12.7839 10.8888C12.6818 10.9303 12.589 10.9916 12.5108 11.0692L11.7675 11.7683C11.2911 12.2225 10.6582 12.4758 10 12.4758C9.34183 12.4758 8.7089 12.2225 8.2325 11.7683L1.9675 5.5C2.17817 5.09878 2.49426 4.76261 2.88176 4.52767C3.26927 4.29273 3.71351 4.16792 4.16667 4.16667H8.33333C8.55435 4.16667 8.76631 4.07887 8.92259 3.92259C9.07887 3.76631 9.16667 3.55435 9.16667 3.33333C9.16667 3.11232 9.07887 2.90036 8.92259 2.74408C8.76631 2.5878 8.55435 2.5 8.33333 2.5H4.16667C3.062 2.50132 2.00296 2.94073 1.22185 3.72185C0.440735 4.50296 0.00132321 5.562 0 6.66667L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V10C20 9.77899 19.9122 9.56702 19.7559 9.41074C19.5996 9.25446 19.3877 9.16667 19.1667 9.16667Z" fill="#555F6D" />
                                            <path d="M19.0198 2.7474C19.0964 2.82564 19.1568 2.91821 19.1977 3.01982C19.2385 3.12142 19.2589 3.23007 19.2578 3.33957C19.2566 3.44906 19.2339 3.55726 19.1909 3.65798C19.1479 3.75869 19.0855 3.84996 19.0073 3.92656C18.9291 4.00317 18.8365 4.06361 18.7349 4.10444C18.6333 4.14527 18.5246 4.16569 18.4151 4.16453C18.3056 4.16337 18.1974 4.14065 18.0967 4.09767C17.996 4.0547 17.9047 3.99231 17.8281 3.91406L16.2948 2.34656L16.2948 8.33073C16.2948 8.55174 16.207 8.7637 16.0507 8.91999C15.8944 9.07627 15.6825 9.16406 15.4615 9.16406C15.2405 9.16406 15.0285 9.07627 14.8722 8.91999C14.7159 8.7637 14.6281 8.55174 14.6281 8.33073L14.6281 2.34656L13.0948 3.91406C12.9401 4.07209 12.7289 4.16218 12.5078 4.16453C12.2867 4.16687 12.0737 4.08127 11.9156 3.92656C11.7576 3.77185 11.6675 3.56071 11.6652 3.33957C11.6628 3.11843 11.7484 2.90542 11.9031 2.7474L13.999 0.605731C14.3838 0.219056 14.906 0.000357055 15.4515 -0.0026032C15.4567 -0.00387445 15.4621 -0.00387445 15.4673 -0.0026032C15.7367 -0.00267952 16.0035 0.0504296 16.2523 0.153678C16.5011 0.256926 16.7271 0.408282 16.9173 0.599064L19.0198 2.7474Z" fill="#555F6D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_176_1612">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </a>
                                <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_176_1613)">
                                            <path d="M17.4974 3.33333H14.9141C14.7206 2.39284 14.2089 1.54779 13.4651 0.940598C12.7213 0.333408 11.7909 0.0012121 10.8307 0L9.16406 0C8.20389 0.0012121 7.27349 0.333408 6.52969 0.940598C5.78588 1.54779 5.27414 2.39284 5.08073 3.33333H2.4974C2.27638 3.33333 2.06442 3.42113 1.90814 3.57741C1.75186 3.73369 1.66406 3.94565 1.66406 4.16667C1.66406 4.38768 1.75186 4.59964 1.90814 4.75592C2.06442 4.9122 2.27638 5 2.4974 5H3.33073V15.8333C3.33205 16.938 3.77146 17.997 4.55258 18.7782C5.33369 19.5593 6.39273 19.9987 7.4974 20H12.4974C13.6021 19.9987 14.6611 19.5593 15.4422 18.7782C16.2233 17.997 16.6627 16.938 16.6641 15.8333V5H17.4974C17.7184 5 17.9304 4.9122 18.0867 4.75592C18.2429 4.59964 18.3307 4.38768 18.3307 4.16667C18.3307 3.94565 18.2429 3.73369 18.0867 3.57741C17.9304 3.42113 17.7184 3.33333 17.4974 3.33333ZM9.16406 1.66667H10.8307C11.3476 1.6673 11.8517 1.82781 12.2737 2.1262C12.6958 2.42459 13.0152 2.84624 13.1882 3.33333H6.80656C6.97955 2.84624 7.29898 2.42459 7.72105 2.1262C8.14312 1.82781 8.64717 1.6673 9.16406 1.66667ZM14.9974 15.8333C14.9974 16.4964 14.734 17.1323 14.2652 17.6011C13.7963 18.0699 13.1604 18.3333 12.4974 18.3333H7.4974C6.83435 18.3333 6.19847 18.0699 5.72963 17.6011C5.26079 17.1323 4.9974 16.4964 4.9974 15.8333V5H14.9974V15.8333Z" fill="#555F6D" />
                                            <path d="M8.33333 15.0026C8.55434 15.0026 8.76631 14.9148 8.92259 14.7585C9.07887 14.6022 9.16666 14.3903 9.16666 14.1693V9.16927C9.16666 8.94826 9.07887 8.73629 8.92259 8.58001C8.76631 8.42373 8.55434 8.33594 8.33333 8.33594C8.11232 8.33594 7.90036 8.42373 7.74408 8.58001C7.5878 8.73629 7.5 8.94826 7.5 9.16927V14.1693C7.5 14.3903 7.5878 14.6022 7.74408 14.7585C7.90036 14.9148 8.11232 15.0026 8.33333 15.0026Z" fill="#555F6D" />
                                            <path d="M11.6693 15.0026C11.8903 15.0026 12.1023 14.9148 12.2585 14.7585C12.4148 14.6022 12.5026 14.3903 12.5026 14.1693V9.16927C12.5026 8.94826 12.4148 8.73629 12.2585 8.58001C12.1023 8.42373 11.8903 8.33594 11.6693 8.33594C11.4483 8.33594 11.2363 8.42373 11.08 8.58001C10.9237 8.73629 10.8359 8.94826 10.8359 9.16927V14.1693C10.8359 14.3903 10.9237 14.6022 11.08 14.7585C11.2363 14.9148 11.4483 15.0026 11.6693 15.0026Z" fill="#555F6D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_176_1613">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </a>
                              </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td>
                            <div className='user-deatils-bx'>
                               <img src={AvaterImg}/>
                                <div className='user-details'>
                                <span className='name'>Nikita Singh</span>
                                       <span className='email'>nikita.singh@gmail.com</span>
                               </div>           
                            </div>
                            </td>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td><span className='text-new'>New</span></td>
                            <td>
                            <div className='action-bx'>
                              <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1148 2.53733L17.4646 0.886791C17.1836 0.605653 16.8501 0.382633 16.4829 0.230475C16.1158 0.0783163 15.7223 0 15.3248 0C14.9274 0 14.5339 0.0783163 14.1668 0.230475C13.7996 0.382633 13.4661 0.605653 13.1851 0.886791L0.871984 13.1998C0.745683 13.3328 0.667296 13.5041 0.649209 13.6867L0.00563678 19.0784C-0.0080105 19.1946 0.00319165 19.3124 0.0385004 19.4239C0.0738091 19.5354 0.132418 19.6381 0.210439 19.7253C0.288461 19.8124 0.384114 19.882 0.491054 19.9293C0.597994 19.9767 0.713778 20.0008 0.830729 20H0.92699L6.31484 19.3535C6.49909 19.3317 6.67059 19.2483 6.80165 19.1169L19.1148 6.81496C19.6816 6.24755 20 5.47826 20 4.67614C20 3.87403 19.6816 3.10474 19.1148 2.53733ZM5.83904 17.7608L1.76583 18.2367L2.24164 14.1626L11.4524 4.94986L15.0498 8.54802L5.83904 17.7608ZM17.9404 5.65684L16.2159 7.37889L12.6213 3.78348L14.3512 2.05317C14.6091 1.79531 14.9588 1.65046 15.3235 1.65046C15.6881 1.65046 16.0378 1.79531 16.2957 2.05317L17.9459 3.7037C18.2041 3.96127 18.3494 4.31085 18.3499 4.67557C18.3504 5.04029 18.2061 5.39028 17.9486 5.64858L17.9404 5.65684Z" fill="#555F6D" />
                                    </svg>
                                </a>
                                <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_176_1612)">
                                            <path d="M19.1667 9.16667C18.9457 9.16667 18.7337 9.25446 18.5774 9.41074C18.4211 9.56702 18.3333 9.77899 18.3333 10V15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V7.55917L7.05417 12.9467C7.83675 13.7213 8.89297 14.1565 9.99412 14.1581C11.0953 14.1597 12.1527 13.7274 12.9375 12.955L13.6725 12.2642C13.7522 12.1882 13.8161 12.0972 13.8605 11.9963C13.9048 11.8955 13.9288 11.7869 13.9309 11.6768C13.933 11.5667 13.9133 11.4572 13.8728 11.3548C13.8324 11.2523 13.772 11.1589 13.6952 11.0799C13.6185 11.001 13.5268 10.938 13.4255 10.8947C13.3243 10.8513 13.2154 10.8285 13.1053 10.8275C12.9951 10.8265 12.8859 10.8473 12.7839 10.8888C12.6818 10.9303 12.589 10.9916 12.5108 11.0692L11.7675 11.7683C11.2911 12.2225 10.6582 12.4758 10 12.4758C9.34183 12.4758 8.7089 12.2225 8.2325 11.7683L1.9675 5.5C2.17817 5.09878 2.49426 4.76261 2.88176 4.52767C3.26927 4.29273 3.71351 4.16792 4.16667 4.16667H8.33333C8.55435 4.16667 8.76631 4.07887 8.92259 3.92259C9.07887 3.76631 9.16667 3.55435 9.16667 3.33333C9.16667 3.11232 9.07887 2.90036 8.92259 2.74408C8.76631 2.5878 8.55435 2.5 8.33333 2.5H4.16667C3.062 2.50132 2.00296 2.94073 1.22185 3.72185C0.440735 4.50296 0.00132321 5.562 0 6.66667L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V10C20 9.77899 19.9122 9.56702 19.7559 9.41074C19.5996 9.25446 19.3877 9.16667 19.1667 9.16667Z" fill="#555F6D" />
                                            <path d="M19.0198 2.7474C19.0964 2.82564 19.1568 2.91821 19.1977 3.01982C19.2385 3.12142 19.2589 3.23007 19.2578 3.33957C19.2566 3.44906 19.2339 3.55726 19.1909 3.65798C19.1479 3.75869 19.0855 3.84996 19.0073 3.92656C18.9291 4.00317 18.8365 4.06361 18.7349 4.10444C18.6333 4.14527 18.5246 4.16569 18.4151 4.16453C18.3056 4.16337 18.1974 4.14065 18.0967 4.09767C17.996 4.0547 17.9047 3.99231 17.8281 3.91406L16.2948 2.34656L16.2948 8.33073C16.2948 8.55174 16.207 8.7637 16.0507 8.91999C15.8944 9.07627 15.6825 9.16406 15.4615 9.16406C15.2405 9.16406 15.0285 9.07627 14.8722 8.91999C14.7159 8.7637 14.6281 8.55174 14.6281 8.33073L14.6281 2.34656L13.0948 3.91406C12.9401 4.07209 12.7289 4.16218 12.5078 4.16453C12.2867 4.16687 12.0737 4.08127 11.9156 3.92656C11.7576 3.77185 11.6675 3.56071 11.6652 3.33957C11.6628 3.11843 11.7484 2.90542 11.9031 2.7474L13.999 0.605731C14.3838 0.219056 14.906 0.000357055 15.4515 -0.0026032C15.4567 -0.00387445 15.4621 -0.00387445 15.4673 -0.0026032C15.7367 -0.00267952 16.0035 0.0504296 16.2523 0.153678C16.5011 0.256926 16.7271 0.408282 16.9173 0.599064L19.0198 2.7474Z" fill="#555F6D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_176_1612">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </a>
                                <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_176_1613)">
                                            <path d="M17.4974 3.33333H14.9141C14.7206 2.39284 14.2089 1.54779 13.4651 0.940598C12.7213 0.333408 11.7909 0.0012121 10.8307 0L9.16406 0C8.20389 0.0012121 7.27349 0.333408 6.52969 0.940598C5.78588 1.54779 5.27414 2.39284 5.08073 3.33333H2.4974C2.27638 3.33333 2.06442 3.42113 1.90814 3.57741C1.75186 3.73369 1.66406 3.94565 1.66406 4.16667C1.66406 4.38768 1.75186 4.59964 1.90814 4.75592C2.06442 4.9122 2.27638 5 2.4974 5H3.33073V15.8333C3.33205 16.938 3.77146 17.997 4.55258 18.7782C5.33369 19.5593 6.39273 19.9987 7.4974 20H12.4974C13.6021 19.9987 14.6611 19.5593 15.4422 18.7782C16.2233 17.997 16.6627 16.938 16.6641 15.8333V5H17.4974C17.7184 5 17.9304 4.9122 18.0867 4.75592C18.2429 4.59964 18.3307 4.38768 18.3307 4.16667C18.3307 3.94565 18.2429 3.73369 18.0867 3.57741C17.9304 3.42113 17.7184 3.33333 17.4974 3.33333ZM9.16406 1.66667H10.8307C11.3476 1.6673 11.8517 1.82781 12.2737 2.1262C12.6958 2.42459 13.0152 2.84624 13.1882 3.33333H6.80656C6.97955 2.84624 7.29898 2.42459 7.72105 2.1262C8.14312 1.82781 8.64717 1.6673 9.16406 1.66667ZM14.9974 15.8333C14.9974 16.4964 14.734 17.1323 14.2652 17.6011C13.7963 18.0699 13.1604 18.3333 12.4974 18.3333H7.4974C6.83435 18.3333 6.19847 18.0699 5.72963 17.6011C5.26079 17.1323 4.9974 16.4964 4.9974 15.8333V5H14.9974V15.8333Z" fill="#555F6D" />
                                            <path d="M8.33333 15.0026C8.55434 15.0026 8.76631 14.9148 8.92259 14.7585C9.07887 14.6022 9.16666 14.3903 9.16666 14.1693V9.16927C9.16666 8.94826 9.07887 8.73629 8.92259 8.58001C8.76631 8.42373 8.55434 8.33594 8.33333 8.33594C8.11232 8.33594 7.90036 8.42373 7.74408 8.58001C7.5878 8.73629 7.5 8.94826 7.5 9.16927V14.1693C7.5 14.3903 7.5878 14.6022 7.74408 14.7585C7.90036 14.9148 8.11232 15.0026 8.33333 15.0026Z" fill="#555F6D" />
                                            <path d="M11.6693 15.0026C11.8903 15.0026 12.1023 14.9148 12.2585 14.7585C12.4148 14.6022 12.5026 14.3903 12.5026 14.1693V9.16927C12.5026 8.94826 12.4148 8.73629 12.2585 8.58001C12.1023 8.42373 11.8903 8.33594 11.6693 8.33594C11.4483 8.33594 11.2363 8.42373 11.08 8.58001C10.9237 8.73629 10.8359 8.94826 10.8359 9.16927V14.1693C10.8359 14.3903 10.9237 14.6022 11.08 14.7585C11.2363 14.9148 11.4483 15.0026 11.6693 15.0026Z" fill="#555F6D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_176_1613">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </a>
                              </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td>
                            <div className='user-deatils-bx'>
                               <img src={AvaterImg}/>
                                <div className='user-details'>
                                <span className='name'>Nikita Singh</span>
                                       <span className='email'>nikita.singh@gmail.com</span>
                               </div>           
                            </div>
                            </td>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td><span className='text-new'>New</span></td>
                            <td>
                            <div className='action-bx'>
                              <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1148 2.53733L17.4646 0.886791C17.1836 0.605653 16.8501 0.382633 16.4829 0.230475C16.1158 0.0783163 15.7223 0 15.3248 0C14.9274 0 14.5339 0.0783163 14.1668 0.230475C13.7996 0.382633 13.4661 0.605653 13.1851 0.886791L0.871984 13.1998C0.745683 13.3328 0.667296 13.5041 0.649209 13.6867L0.00563678 19.0784C-0.0080105 19.1946 0.00319165 19.3124 0.0385004 19.4239C0.0738091 19.5354 0.132418 19.6381 0.210439 19.7253C0.288461 19.8124 0.384114 19.882 0.491054 19.9293C0.597994 19.9767 0.713778 20.0008 0.830729 20H0.92699L6.31484 19.3535C6.49909 19.3317 6.67059 19.2483 6.80165 19.1169L19.1148 6.81496C19.6816 6.24755 20 5.47826 20 4.67614C20 3.87403 19.6816 3.10474 19.1148 2.53733ZM5.83904 17.7608L1.76583 18.2367L2.24164 14.1626L11.4524 4.94986L15.0498 8.54802L5.83904 17.7608ZM17.9404 5.65684L16.2159 7.37889L12.6213 3.78348L14.3512 2.05317C14.6091 1.79531 14.9588 1.65046 15.3235 1.65046C15.6881 1.65046 16.0378 1.79531 16.2957 2.05317L17.9459 3.7037C18.2041 3.96127 18.3494 4.31085 18.3499 4.67557C18.3504 5.04029 18.2061 5.39028 17.9486 5.64858L17.9404 5.65684Z" fill="#555F6D" />
                                    </svg>
                                </a>
                                <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_176_1612)">
                                            <path d="M19.1667 9.16667C18.9457 9.16667 18.7337 9.25446 18.5774 9.41074C18.4211 9.56702 18.3333 9.77899 18.3333 10V15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V7.55917L7.05417 12.9467C7.83675 13.7213 8.89297 14.1565 9.99412 14.1581C11.0953 14.1597 12.1527 13.7274 12.9375 12.955L13.6725 12.2642C13.7522 12.1882 13.8161 12.0972 13.8605 11.9963C13.9048 11.8955 13.9288 11.7869 13.9309 11.6768C13.933 11.5667 13.9133 11.4572 13.8728 11.3548C13.8324 11.2523 13.772 11.1589 13.6952 11.0799C13.6185 11.001 13.5268 10.938 13.4255 10.8947C13.3243 10.8513 13.2154 10.8285 13.1053 10.8275C12.9951 10.8265 12.8859 10.8473 12.7839 10.8888C12.6818 10.9303 12.589 10.9916 12.5108 11.0692L11.7675 11.7683C11.2911 12.2225 10.6582 12.4758 10 12.4758C9.34183 12.4758 8.7089 12.2225 8.2325 11.7683L1.9675 5.5C2.17817 5.09878 2.49426 4.76261 2.88176 4.52767C3.26927 4.29273 3.71351 4.16792 4.16667 4.16667H8.33333C8.55435 4.16667 8.76631 4.07887 8.92259 3.92259C9.07887 3.76631 9.16667 3.55435 9.16667 3.33333C9.16667 3.11232 9.07887 2.90036 8.92259 2.74408C8.76631 2.5878 8.55435 2.5 8.33333 2.5H4.16667C3.062 2.50132 2.00296 2.94073 1.22185 3.72185C0.440735 4.50296 0.00132321 5.562 0 6.66667L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V10C20 9.77899 19.9122 9.56702 19.7559 9.41074C19.5996 9.25446 19.3877 9.16667 19.1667 9.16667Z" fill="#555F6D" />
                                            <path d="M19.0198 2.7474C19.0964 2.82564 19.1568 2.91821 19.1977 3.01982C19.2385 3.12142 19.2589 3.23007 19.2578 3.33957C19.2566 3.44906 19.2339 3.55726 19.1909 3.65798C19.1479 3.75869 19.0855 3.84996 19.0073 3.92656C18.9291 4.00317 18.8365 4.06361 18.7349 4.10444C18.6333 4.14527 18.5246 4.16569 18.4151 4.16453C18.3056 4.16337 18.1974 4.14065 18.0967 4.09767C17.996 4.0547 17.9047 3.99231 17.8281 3.91406L16.2948 2.34656L16.2948 8.33073C16.2948 8.55174 16.207 8.7637 16.0507 8.91999C15.8944 9.07627 15.6825 9.16406 15.4615 9.16406C15.2405 9.16406 15.0285 9.07627 14.8722 8.91999C14.7159 8.7637 14.6281 8.55174 14.6281 8.33073L14.6281 2.34656L13.0948 3.91406C12.9401 4.07209 12.7289 4.16218 12.5078 4.16453C12.2867 4.16687 12.0737 4.08127 11.9156 3.92656C11.7576 3.77185 11.6675 3.56071 11.6652 3.33957C11.6628 3.11843 11.7484 2.90542 11.9031 2.7474L13.999 0.605731C14.3838 0.219056 14.906 0.000357055 15.4515 -0.0026032C15.4567 -0.00387445 15.4621 -0.00387445 15.4673 -0.0026032C15.7367 -0.00267952 16.0035 0.0504296 16.2523 0.153678C16.5011 0.256926 16.7271 0.408282 16.9173 0.599064L19.0198 2.7474Z" fill="#555F6D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_176_1612">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </a>
                                <a href='#'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_176_1613)">
                                            <path d="M17.4974 3.33333H14.9141C14.7206 2.39284 14.2089 1.54779 13.4651 0.940598C12.7213 0.333408 11.7909 0.0012121 10.8307 0L9.16406 0C8.20389 0.0012121 7.27349 0.333408 6.52969 0.940598C5.78588 1.54779 5.27414 2.39284 5.08073 3.33333H2.4974C2.27638 3.33333 2.06442 3.42113 1.90814 3.57741C1.75186 3.73369 1.66406 3.94565 1.66406 4.16667C1.66406 4.38768 1.75186 4.59964 1.90814 4.75592C2.06442 4.9122 2.27638 5 2.4974 5H3.33073V15.8333C3.33205 16.938 3.77146 17.997 4.55258 18.7782C5.33369 19.5593 6.39273 19.9987 7.4974 20H12.4974C13.6021 19.9987 14.6611 19.5593 15.4422 18.7782C16.2233 17.997 16.6627 16.938 16.6641 15.8333V5H17.4974C17.7184 5 17.9304 4.9122 18.0867 4.75592C18.2429 4.59964 18.3307 4.38768 18.3307 4.16667C18.3307 3.94565 18.2429 3.73369 18.0867 3.57741C17.9304 3.42113 17.7184 3.33333 17.4974 3.33333ZM9.16406 1.66667H10.8307C11.3476 1.6673 11.8517 1.82781 12.2737 2.1262C12.6958 2.42459 13.0152 2.84624 13.1882 3.33333H6.80656C6.97955 2.84624 7.29898 2.42459 7.72105 2.1262C8.14312 1.82781 8.64717 1.6673 9.16406 1.66667ZM14.9974 15.8333C14.9974 16.4964 14.734 17.1323 14.2652 17.6011C13.7963 18.0699 13.1604 18.3333 12.4974 18.3333H7.4974C6.83435 18.3333 6.19847 18.0699 5.72963 17.6011C5.26079 17.1323 4.9974 16.4964 4.9974 15.8333V5H14.9974V15.8333Z" fill="#555F6D" />
                                            <path d="M8.33333 15.0026C8.55434 15.0026 8.76631 14.9148 8.92259 14.7585C9.07887 14.6022 9.16666 14.3903 9.16666 14.1693V9.16927C9.16666 8.94826 9.07887 8.73629 8.92259 8.58001C8.76631 8.42373 8.55434 8.33594 8.33333 8.33594C8.11232 8.33594 7.90036 8.42373 7.74408 8.58001C7.5878 8.73629 7.5 8.94826 7.5 9.16927V14.1693C7.5 14.3903 7.5878 14.6022 7.74408 14.7585C7.90036 14.9148 8.11232 15.0026 8.33333 15.0026Z" fill="#555F6D" />
                                            <path d="M11.6693 15.0026C11.8903 15.0026 12.1023 14.9148 12.2585 14.7585C12.4148 14.6022 12.5026 14.3903 12.5026 14.1693V9.16927C12.5026 8.94826 12.4148 8.73629 12.2585 8.58001C12.1023 8.42373 11.8903 8.33594 11.6693 8.33594C11.4483 8.33594 11.2363 8.42373 11.08 8.58001C10.9237 8.73629 10.8359 8.94826 10.8359 9.16927V14.1693C10.8359 14.3903 10.9237 14.6022 11.08 14.7585C11.2363 14.9148 11.4483 15.0026 11.6693 15.0026Z" fill="#555F6D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_176_1613">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </a>
                              </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    );
}

export default Table;
