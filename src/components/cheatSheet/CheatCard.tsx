"use client";

import {
  Box,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import CodeHightLight from "./CodeHightLight";

const dummyContent = [
  `import React from 'react';
import ReactDOM from 'react-dom';`,
  `class Hello extends React.Component {
    render () {
      return <div className='message-box'>
        Hello {this.props.name}
      </div>
    }
  }`,
  `const el = document.body;\nReactDOM.render(<Hello name='John' />, el);`,
];

const CheatCard = () => {
  return (
    <Card
      boxShadow={
        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 80, 0.1) 0px 0px 0px 1px, rgba(0, 0, 80, 0.1) 0px 1px 1px 0px, rgba(0, 0, 80, 0.3) 0px 1.5px 3px -2px, rgba(0, 0, 80, 0.04) 0px 4px 6px 0px, rgba(0, 0, 80, 0.03) 0px 8px 12px -1px"
      }
    >
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {dummyContent.map((code, index) => (
            <CodeHightLight key={index} code={code} />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CheatCard;
