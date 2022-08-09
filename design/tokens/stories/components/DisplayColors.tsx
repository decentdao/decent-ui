import { Box, Text } from '@chakra-ui/react';
import { StoryLayout } from '../../../shared/StoryLayout';
// import colors from "../../foundations/colors"
import tokenData from '../../foundations/colors/design-tokens-colors.json';

const { tokens } = tokenData;
const { color } = tokens;

export function DisplayColors() {
    return (
        <StoryLayout title='Colors'>
            {Object.entries(color).map(([colorCategory, values], index) => {
                return (
                    <Box key={colorCategory + index}>
                        <ul>
                            <li>
                                {colorCategory}
                                <ul style={{ marginLeft: '1rem' }}>
                                    {Object.entries(values as Object).map(
                                        ([colorTitle, value]) => {
                                            console.log(
                                                'FOOP: TYPE OF VALUE: ',
                                                typeof value
                                            );
                                            return (
                                                <li>
                                                    {colorTitle}
                                                    <ul
                                                        style={{
                                                            marginLeft: '1rem',
                                                        }}
                                                    >
                                                        {Object.entries(
                                                            value as Object
                                                        ).map(
                                                            ([value, type]) => {
                                                                return (
                                                                    value !==
                                                                        'value' &&
                                                                    value !==
                                                                        'type' && (
                                                                        <li>
                                                                            {
                                                                                value
                                                                            }
                                                                        </li>
                                                                    )
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                </li>
                                            );
                                            //   return (
                                            //     <Box key={colorName} display="flex" justifyContent="space-between" flexGrow={1} height="75px" marginY="12">
                                            //       <Box width="fit-content" display="flex" flexDirection="column" justifyContent="center">
                                            //         <Text fontSize="lg" marginBottom="4" textStyle="text-sm-mono">
                                            //           {colorName}
                                            //         </Text>
                                            //         <Text textStyle="text-sm-sans">{value}</Text>
                                            //       </Box>
                                            //       <Box marginLeft="24" flexGrow={1} bg={colorKey} maxWidth="60%" borderRadius="lg" />
                                            //     </Box>
                                            //   )
                                        }
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </Box>
                );
            })}
        </StoryLayout>
    );
}
