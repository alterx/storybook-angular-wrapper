const getComponentTSelector = component => {
  return component.__annotations__[0].selector;
};

export const angularWrapper = (wrapper: string, storyPlaceholder: string) => (
  storyFn: () => any,
) => {
  const story = storyFn();

  if (story.template) {
    story.template = wrapper.replace(storyPlaceholder, story.template);
  }

  if (story.component) {
    let selector = getComponentTSelector(story.component);
    let props = '';
    Object.keys(story.props).forEach(key => {
      props += '[' + key + ']="' + key + '" ';
    });

    story.template = wrapper.replace(
      storyPlaceholder,
      `<${selector} ${props}></${selector}>`,
    );

    delete story.component;
  }
  return story;
};
