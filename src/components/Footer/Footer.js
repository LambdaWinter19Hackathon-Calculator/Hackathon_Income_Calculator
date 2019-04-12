import React from 'react';
import { Wrapper, List, Items } from './style.footer';

const Footer = () => {
    return (
        <Wrapper>
            <List>
                <Items>
                    <a href="https://lambdaschool.com/courses/cs/web/">
                        Courses
                    </a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/about/">About</a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/blog/">Blog</a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/apply/">Apply</a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/careers">Careers</a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/privacy">Legal</a>
                </Items>
                <Items>
                    <a href="https://lambdaschool.com/contact">Contact</a>
                </Items>
            </List>
        </Wrapper>
    );
};

export default Footer;
