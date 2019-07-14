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

                <a href="https://twitter.com/lambdaschool" target="_blank">
                    <i className="fab fa-twitter icon margin-left" />
                </a>
                <a
                    href="https://www.facebook.com/LambdaSchoolOnline/"
                    target="_blank"
                >
                    <i className="fab fa-facebook icon" />
                </a>
                <a href="https://github.com/LambdaSchool" target="_blank">
                    <i className="fab fa-github icon" />
                </a>
            </List>
        </Wrapper>
    );
};

export default Footer;
