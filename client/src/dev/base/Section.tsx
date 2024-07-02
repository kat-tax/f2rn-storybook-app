import {useStyles, createStyleSheet} from 'react-native-unistyles';
import {View, ScrollView, Text} from 'react-native';

export interface SectionProps {
  title: string,
  children?: React.ReactNode,
}

export function Section(props: SectionProps) {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.root}>
      <Text style={styles.title}>
        {props.title}
      </Text>
      <ScrollView
        horizontal
        style={styles.viewport}
        contentContainerStyle={styles.content}>
        {props.children}
      </ScrollView>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    gap: theme.display.space7,
    marginBottom: theme.display.space5,
    paddingBottom: theme.display.space7,
    paddingHorizontal: theme.display.space3,
    borderColor: theme.colors.border,
    borderRadius: 4,
    borderWidth: 1,
  },
  viewport: {
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  content: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.display.space3,
  },
  title: {
    padding: theme.display.space3,
    paddingBottom: 0,
    color: theme.colors.mutedForeground,
    fontSize: theme.font.size,
    fontWeight: theme.font.weight,
    lineHeight: theme.font.height,
    letterSpacing: theme.font.spacing,
    textAlign: 'center',
  },
}));
