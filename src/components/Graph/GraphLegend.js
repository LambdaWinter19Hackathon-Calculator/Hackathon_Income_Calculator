import React from 'react';
import { DiscreteColorLegend } from 'react-vis';
import styled from 'styled-components';

const GraphLegend = () => {
    return (
        <LegendContainer>
            <DiscreteColorLegend
                items={[
                    {
                        title: 'PRE-LAMBDA',
                        color: 'rgb(255,6,65)',
                        strokeWidth: 6,
                    },
                    {
                        title: 'POST-LAMBDA',
                        color: 'rgb(41,160,221)',
                        strokeWidth: 6,
                    },
                ]}
                orientation="horizontal"
                style={{
                    fontSize: 14,
                    overflowY: 'hidden',
                    paddingLeft: 20,
                }}
            />
        </LegendContainer>
    );
};

const LegendContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    margin-bottom: -2rem;
`;

export default GraphLegend;
