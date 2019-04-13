import React from 'react';
import { Wrapper, List, Items } from './style.footer';

const Footer = () => {
    return (
        <Wrapper>
            <List>
                <Items>
                    <a
                        href="https://lambdaschool.com/courses/cs/web/"
                        target="_blank"
                    >
                        Courses
                    </a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/about/" target="_blank">
                        About
                    </a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/blog/" target="_blank">
                        Blog
                    </a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/apply/" target="_blank">
                        Apply
                    </a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/careers" target="_blank">
                        Careers
                    </a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/privacy" target="_blank">
                        Legal
                    </a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/contact" target="_blank">
                        Contact
                    </a>
                </Items>
            </List>
        </Wrapper>
    );
};

export default Footer;
