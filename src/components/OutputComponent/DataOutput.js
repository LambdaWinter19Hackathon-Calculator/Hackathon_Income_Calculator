import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import TweetButton from './TweetButton';
import { toggleEarnings, toggleIsa } from '../../store/actions/rootAction';
import {
    OutputContainer,
    Nav,
    NavItem,
    selected,
    Title,
    DataContainer,
    Wrap,
    Data,
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

                <Title>Earnings</Title>

                <DataContainer>
                    <Wrap>
                        <h5>
                            Pre-Lambda Income <br />
                            Over {yearsOfWork ? yearsOfWork : 0} Years
                        </h5>
                        <Data>
                            <NumberFormat
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
                            Over {yearsOfWork ? yearsOfWork : 0} Years
                        </h5>
                        <Data>
                            <NumberFormat
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
                            Over {yearsOfWork ? yearsOfWork : 0} Years
                        </h5>
                        <Data>
                            <NumberFormat
                                value={afterTotal - beforeTotal}
                                thousandSeparator={true}
                                displayType={'text'}
                                prefix={'$'}
                            />
                        </Data>

                        {/* <TweetButton tweetMsg={tweetMsg} /> */}
                    </Wrap>
                </DataContainer>
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
