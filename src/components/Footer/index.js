import React from 'react';
import styled from "styled-components";

const FooterBanner = styled.div`
    width: 100%;
    position: fixed;
    padding: 6px;
    background: skyblue;
    bottom: 0;
    font-size: 0.8rem;
    a:hover {
        color: var(--darkgrey);
    }
`;


function FloatingFooter() {
  return (
    <FooterBanner>
        <p>
            Liked our product? Leave a review&nbsp;
            <a 
                href="https://www.producthunt.com/products/github-resume-generator/reviews/new" 
                target="_blank"
                rel="noopener noreferrer"
            >here</a>.
        </p>
    </FooterBanner>
  )
}

export default FloatingFooter