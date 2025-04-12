import React from 'react'
import styled from 'styled-components';
export const Card = ({
  AuthorName,
  ImageURL,
  Category,
  BookDescription,
  BookTitle,
  BookPDFURL,
}) => {
return (
    <div>
        <StyledWrapper>
      <div className="card">
        <div className="image_container">
         <img src={ImageURL} alt="image container here" />
        </div>
        <div className="title">
          <span>{BookTitle}</span>
        </div>
        {/* size of quantity needed in the book section */}
        {/* <div className="size">
          <span>Size</span>
          <ul className="list-size">
            <li className="item-list"><button className="item-list-button">37</button></li>
            <li className="item-list"><button className="item-list-button">38</button></li>
            <li className="item-list"><button className="item-list-button">39</button></li>
            <li className="item-list"><button className="item-list-button">40</button></li>
            <li className="item-list"><button className="item-list-button">41</button></li>
          </ul>
        </div> */}
        <div className="action">
          <div className="price">
            <span>{Category}</span>
          </div>
          <button className="cart-button">
            <svg className="cart-icon" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
        <p className='text-white font-bold'>description :</p>
        <div className="disc text-white">{BookDescription}</div>
      </div>
    </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .card {
  overflow: hidden;
  height: 20rem;
  width: 15rem;
    --bg-card: #27272a;
    --primary: #6d28d9;
    --primary-800: #4c1d95;
    --primary-shadow: #2e1065;
    --light: #d9d9d9;
    --zinc-800: #18181b;
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    padding: 1rem;

    background-color: var(--bg-card);

    border-radius: 1rem;
  }

  .image_container {
  height: 14rem;
    overflow: hidden;
    cursor: pointer;

    position: relative;
    z-index: 5;

    width: 100%;
    height: 8rem;
    background-color: var(--primary-800);

    border-radius: 0.5rem;
  }

  .image_container .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 3rem;
    fill: var(--light);
  }

  .title {
    overflow: clip;

    width: 100%;

    font-size: 1rem;
    font-weight: 600;
    color: var(--light);
    text-transform: capitalize;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }

  .size {
    font-size: 0.75rem;
    color: var(--light);
  }

  .list-size {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.25rem;
  }

  .list-size .item-list {
    list-style: none;
  }

  .list-size .item-list-button {
    cursor: pointer;

    padding: 0.5rem;
    background-color: var(--zinc-800);

    font-size: 0.75rem;
    color: var(--light);

    border: 2px solid var(--zinc-800);
    border-radius: 0.25rem;

    transition: all 0.3s ease-in-out;
  }

  .item-list-button:hover {
    border: 2px solid var(--light);
  }
  .item-list-button:focus {
    background-color: var(--primary);

    border: 2px solid var(--primary-shadow);

    box-shadow: inset 0px 1px 4px var(--primary-shadow);
  }

  .action {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--light);
  }

  .cart-button {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;
    width: 5rem;
    background-image: var(--bg-linear);

    font-size: 0.75rem;
    font-weight: 500;
    color: var(--light);
    text-wrap: nowrap;

    border: 2px solid hsla(262, 83%, 58%, 0.5);
    border-radius: 0.5rem;
    box-shadow: inset 0 0 0.25rem 1px var(--light);
  }

  .cart-button .cart-icon {
    width: 1rem;
  }`;



  
