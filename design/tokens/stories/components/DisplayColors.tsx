import { Heading, Box, Text } from '@chakra-ui/react';
import { StoryLayout } from '../../../shared/StoryLayout';
import colors from '../../foundations/colors';

export function DisplayColors() {
    return (
        <StoryLayout title='Colors'>
            {Object.entries(colors).map(([colorCategory, values], index) => {
                return (
                    <Box key={colorCategory + index}>
                        <Heading as='h2' mb={4} fontSize='32px' textTransform={'capitalize'} fontWeight={'bold'}>
                            {colorCategory}
                        </Heading>
                        {Object.entries(values as Object).map(
                            ([colorTitle, hexValue]) => {
                                return (
                                    <Box
                                        key={colorTitle}
                                        display='flex'
                                        justifyContent='space-between'
                                        flexGrow={1}
                                        height='75px'
                                        marginY='12'
                                    >
                                        <Box
                                            width='fit-content'
                                            display='flex'
                                            flexDirection='column'
                                            justifyContent='center'
                                        >
                                            <Text
                                                fontSize='lg'
                                                marginBottom='4'
                                                textStyle='text-sm-mono'
                                            >
                                                {colorTitle}
                                            </Text>
                                            <Text textStyle='text-sm-sans'>
                                                {hexValue.value}
                                            </Text>
                                        </Box>
                                        <Box
                                            marginLeft='24'
                                            flexGrow={1}
                                            bg={hexValue.value}
                                            maxWidth='60%'
                                            borderRadius='lg'
                                        />
                                    </Box>
                                );
                            }
                        )}
                    </Box>
                );
            })}
        </StoryLayout>
    );
}
