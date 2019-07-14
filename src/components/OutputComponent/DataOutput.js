import React, { Component } from 'react';
import { connect } from 'react-redux';
import TweetButton from './TweetButton';
import { toggleEarnings, toggleIsa } from '../../store/actions/rootAction';
import {
    OutputContainer,
    Nav,
    NavItem,
    selected,
    DataContainer,
    Wrap,
    Data,
    NumberOutput,
    Button,
} from './style.output';

class DataOutput extends Component {
    render() {
        const {
            yearsOfWork,
            beforeTotal,
            afterTotal,
            tweetMsg,
            toggleEarnings,
            toggleIsa,
        } = this.props;

        return (
            <OutputContainer>
                <Nav>
                    <NavItem onClick={toggleEarnings} style={selected}>
                        Earnings
                    </NavItem>
                    <NavItem onClick={toggleIsa}>ISA</NavItem>
                </Nav>

                <DataContainer>
                    <Wrap>
                        <h5>
                            Pre-Lambda Income <br />
                            Over&nbsp;
                            <strong>{yearsOfWork ? yearsOfWork : 0}</strong>
                            &nbsp;Years
                        </h5>
                        <Data>
                            <NumberOutput
                                value={beforeTotal ? beforeTotal : 0}
                                thousandSeparator={true}
                                displayType={'text'}
                                prefix={'$'}
                            />
                        </Data>
                    </Wrap>

                    <Wrap>
                        <h5>
                            Post-Lambda Income
                            <br />
                            Over&nbsp;
                            <strong>{yearsOfWork ? yearsOfWork : 0}</strong>
                            &nbsp;Years
                        </h5>
                        <Data>
                            <NumberOutput
                                value={afterTotal ? afterTotal : 0}
                                thousandSeparator={true}
                                displayType={'text'}
                                prefix={'$'}
                            />
                        </Data>
                    </Wrap>

                    <Wrap>
                        <h5>
                            Overall Increase
                            <br />
                            Over&nbsp;
                            <strong>{yearsOfWork ? yearsOfWork : 0}</strong>
                            &nbsp;Years
                        </h5>
                        <Data>
                            <NumberOutput
                                value={afterTotal - beforeTotal}
                                thousandSeparator={true}
                                displayType={'text'}
                                prefix={'$'}
                            />
                        </Data>

                        {/* <TweetButton tweetMsg={tweetMsg} /> */}
                    </Wrap>
                </DataContainer>
                <Button
                    href="https://lambdaschool.com/courses/cs/web/"
                    target="_blank"
                >
                    See our programs
                </Button>
            </OutputContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        beforeTotal: state.beforeTotal,
        afterTotal: state.afterTotal,
        yearsOfWork: state.yearsOfWork,
        tweetMsg: state.tweetMsg,
    };
};

export default connect(
    mapStateToProps,
    { toggleEarnings, toggleIsa }
)(DataOutput);
