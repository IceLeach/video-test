import { ModalStaticFunctions } from "antd/es/modal/confirm";
import Icon from "../Icon";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import styles from './index.less';

interface ConfirmContent {
  /** 内容标题 */
  title?: React.ReactNode;
  /** 内容描述 */
  description?: React.ReactNode;
}

interface ConfirmConfig {
  modal: Omit<ModalStaticFunctions, 'warn'>;
  onOk: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  okText?: string;
  cancelText?: string;
  /** 简单模式 */
  simple?: boolean;
  /** 头部标题 */
  headerTitle?: string;
  icon?: React.ReactNode;
  /** 主体内容 */
  content?: ConfirmContent;
}

const modalConfirm = (config: ConfirmConfig) => {
  const { modal, onOk, onCancel, okText, cancelText, simple, headerTitle, icon, content = {} } = config;
  const { title, description } = content;
  if (simple) {
    modal.confirm({
      centered: true,
      maskClosable: true,
      icon: icon ?? <ExclamationCircleOutlined className={styles.bodyDefaultIcon} />,
      title,
      content: description,
      className: styles.confirmModalSimple,
      onOk,
      onCancel,
      okText,
      cancelText,
    });
  } else {
    const modalFunc = modal.confirm({
      centered: true,
      maskClosable: true,
      icon: <></>,
      content: (
        <>
          <div className={styles.header}>
            <div className={styles.title}>{headerTitle ?? '提示'}</div>
            <div
              className={styles.closeButton}
              onClick={() => modalFunc.destroy()}
            >
              <Icon
                type='icon-a-'
                className={styles.closeIcon}
              />
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.bodyIcon}>
              {icon ?? <ExclamationCircleOutlined className={styles.bodyDefaultIcon} />}
            </div>
            <div className={styles.content}>
              {title ? (<div className={styles.title}>{title}</div>) : (<></>)}
              {description ? (<div className={styles.description} style={{ marginTop: title ? 8 : 0 }}>{description}</div>) : (<></>)}
            </div>
          </div>
        </>
      ),
      className: styles.confirmModal,
      onOk,
      onCancel,
      okText,
      cancelText,
    });
  }
}

export default modalConfirm;
