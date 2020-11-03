import React from 'react';
import Text from '../text';
import { Row, Column } from '../grid';

import styles from './drop-box.scss';

const DropBox = (props) => {
  const { onDrop } = props;

  const handleOnDrop = () => {
    onDrop();
  };

  return (
    <div className={styles['drop-box']} onDragOver="return false" onDrop={handleOnDrop}>
      <Row direction="row">
        <Column>
          <Text
            text="Drag files here or"
            color="grey"
            size="small"
            bold="bold"
          />
        </Column>
        <Column>
          <Text
            text="browse"
            color="blue"
            size="small"
            bold="bold"
            margin="left"
            cursor="pointer"
          />
        </Column>

      </Row>
    </div>
  );
};

export default DropBox;
