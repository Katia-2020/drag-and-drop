export const getIconType = (type) => {
  const wordExtension = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  const excelExtension = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  let iconType;

  if (type === 'application/pdf') {
    iconType = 'pdf';
  }

  if (type === 'image/jpeg') {
    iconType = 'jpeg';
  }

  if (type === excelExtension) {
    iconType = 'excel';
  }

  if (type === wordExtension) {
    iconType = 'word';
  }

  return iconType;
};

export const getStatusIconProps = (file) => {
  const fileReady = (
    file.done &&
    file.supportedFile &&
    file.base64
  );

  if (fileReady) {
    return { theme: 'green', icon: 'done' };
  }

  return { theme: 'red', icon: 'cancel' };
};
