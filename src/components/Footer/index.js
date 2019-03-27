import React from "react"

import "./index.scss"

const authors = [
    { name: "Jeanette Fernandez", githubUsername: "jeanfern5" },
    { name: "Leigh-Ann Friedel", githubUsername: "lafriedel" },
    { name: "Colin Dismuke", githubUsername: "cpdis" },
    { name: "Tommy Huynh", githubUsername: "tommaay" },
    { name: "Chris Honda", githubUsername: "honda0306" }
]

const Footer = () => {
    const AuthorList = authors.map(({ name, githubUsername }, index) => (
        <li className="author" key={index + 1}>
            <a href={`https://github.com/${githubUsername}`}>{name}</a>
        </li>
    ))

    return (
        <footer className="footer">
            <header className="footer__header">
                <h2>About Compound</h2>
                <p>
                    <a href="https://lambdaschool.com/">Lambda School</a> is a
                    30 week, immersive program that provides the tools and
                    training needed to launch a new career—from the comfort of
                    home. As students graduate and accept job offers, many are
                    seeing huge salary increases. Over time, salary increases of
                    this magnitude create a significant amount of wealth that
                    can be further compounded through smart financial planning
                    and investing. With a few simple inputs, Compound shows
                    future earnings for your current job as well as potential
                    future earnings after Lambda School.
                </p>
            </header>
            <section className="footer__content">
                <h3>Created by</h3>
                <ul className="authors">{AuthorList}</ul>
                <p>Part of Lambda School Hackathon 2019</p>
            </section>
        </footer>
    )
}

export default Footer
