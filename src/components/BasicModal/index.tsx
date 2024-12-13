import React from 'react';
import { Modal, ModalProps } from 'antd';
import classNames from 'classnames';
import Icon from '../Icon';
import styles from './index.less';

const BasicModal: React.FC<ModalProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <Modal
      className={classNames([styles.basicModal, className])}
      centered
      closeIcon={<Icon type='icon-a-' />}
      {...restProps}
    />
  );
}

export default BasicModal;
