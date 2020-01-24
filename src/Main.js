import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import { Button, MenuPopper, Menu, MenuItem, DataSelect, Flex, Spacer, Input, Text } from '@zillow/constellation';
import colorTokens from './utils/color';
import presets from './utils/buttonPreset';
import Container from './components/Container';
import LiveButton from './components/LiveButton';

const TableStyled = styled(Table)`
  border-spacing: 16px;
`;

const Main = () => {
  const [content, setContent] = useState("Submit");
  const [toggle, setToggle] = useState(false);
  const [option, setOption] = useState("primary option 1");
  const [buttonStyle, setButtonStyle] = useState(presets[option]);
  
  const menu = (style, state) => (
    <Menu>
      {Object.keys(colorTokens).map(
        variant => (
          <MenuItem 
            key={variant}
            onClick={() => (setButtonStyle({
              ...buttonStyle,
              [style]: {
                ...buttonStyle[style],
                [state]: colorTokens[variant],
              }
            }))}
          >
            <span>{variant}</span>
            <span
              style={{
                color: "transparent",
                background: colorTokens[variant],
                marginLeft: "8px",
              }}
            >
              {variant}
            </span>
          </MenuItem>
        )
      )}
    </Menu>
  );

  useEffect(() => {
    setButtonStyle(presets[option]);
  }, [option]);

	return (
		<Container>
      <Flex display="flex" flexDirection="column" alignItems="center" spacingTop="xl">
        <Flex spacingTop="xl" spacingBottom="xl">
          <Spacer spacingTop="xl" spacingBottom="xl">
            <LiveButton buttonStyle={buttonStyle} enabled={toggle} onClick={() => setToggle(!toggle)}>
              {content}
            </LiveButton>
          </Spacer>
        </Flex>
      </Flex>
      <Flex display="flex" spacingTop="xl" spacingBottom="sm">
        <Flex flexGrow={1} spacingTop="xl" spacingRight="lg">
          <Text fontType="bodyheading" as="h6">Presets</Text>
          <DataSelect
              value={option}
              data={["primary option 1", "primary option 2", "primary option 3", "primary option 4",
              "secondary option 1", "secondary option 2", "secondary option 3", "secondary option 4"]}
              onChange={(event) => {
                setOption(event.target.value);
              }}
          />
        </Flex>
        <Flex flexGrow={1} spacingTop="xl" spacingLeft="lg" spacingRight="lg">
          <Text fontType="bodyheading" as="h6">Content</Text>
          <Input value={content} onChange={(event) => setContent(event.target.value)} />
        </Flex>
      </Flex>
      <TableStyled>
        <thead>
          <tr align="center">
            <th>#</th>
            <th>Normal</th>
            <th>Hover</th>
            <th>Active</th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {["Background", "Text", "Border"].map(
            (style, index) => (
              <tr key={`${style}-${index}`}>
                <td>{style}</td>
                {["Normal", "Hover", "Active", "Selected"].map(
                  (state, index) => (
                    <td key={`${style}-${state}-${index}`} align="center">
                      <MenuPopper 
                        triggered={menu(style, state)}
                      >
                        <Button
                          style={{
                            color: "transparent",
                            backgroundColor: buttonStyle[style][state],
                          }}
                        >
                          Button
                        </Button>
                      </MenuPopper>
                    </td>
                  )
                )}
              </tr>
            ),
          )}
        </tbody>
      </TableStyled>
      <Flex display="flex" justifyContent="flex-end" spacingTop="lg" spacingRight="xl">
        <Button onClick={() => {
          setContent("Submit");
          setToggle(false);
          setOption("primary option 1");
          setButtonStyle(presets["primary option 1"]);
        }}>
          Reset
        </Button>
      </Flex>
		</Container>
	);
};

export default Main;
