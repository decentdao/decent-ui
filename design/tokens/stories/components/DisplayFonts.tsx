import { StoryLayout } from '../../../shared/StoryLayout';
import { Heading, Box, Text } from '@chakra-ui/react';
// import textStyles from '../../foundations/fontStyles';
import textStyles from '../../foundations/textStyles';


export function DisplayFonts() {
    const { sans, mono } = textStyles;
    return (
        <StoryLayout title='Typography'>
            <Box>
                <Heading
                    as='h2'
                    mb={4}
                    fontSize='32px'
                    textTransform={'capitalize'}
                    fontWeight={'bold'}
                >
                    Sans
                </Heading>
                {Object.entries(sans).map((style, key) => (
                    <Box key={key}>
                        <Text>{style[0]}</Text>
                        {Object.entries(style[1]!).map((value, key) => (
                            <p key={key}>{value[0]}</p>
                        ))}
                    </Box>
                ))}
                <Heading
                    as='h2'
                    mb={4}
                    fontSize='32px'
                    textTransform={'capitalize'}
                    fontWeight={'bold'}
                >
                    Mono
                </Heading>
                {Object.entries(mono).map((style, key) => (
                    <Box key={style[0] + key}>
                        <Text>{style[0]}</Text>
                        {Object.entries(style[1]!).map((value, key) => (
                            <p>{value[0]}</p>
                        ))}
                    </Box>
                ))}
            </Box>
        </StoryLayout>
    );
}
