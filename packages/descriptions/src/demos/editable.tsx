import React from 'react';
import { Input } from 'antd';

import ProDescriptions from '@ant-design/pro-descriptions';

export default () => {
  return (
    <ProDescriptions
      // bordered
      formProps={{
        onValuesChange: (e, f) => console.log(f),
      }}
      title="可编辑的定义列表"
      request={async () => {
        return Promise.resolve({
          success: true,
          data: {
            id: '这是一段文本columns',
            date: '20200809',
            money: '1212100',
            state: 'all',
            state2: 'open',
          },
        });
      }}
      editable={{}}
      columns={[
        {
          title: '文本',
          key: 'text',
          dataIndex: 'id',
        },
        {
          title: '状态',
          key: 'state',
          dataIndex: 'state',
          valueType: 'select',
          editable: false,
          valueEnum: {
            all: { text: '全部', status: 'Default' },
            open: {
              text: '未解决',
              status: 'Error',
            },
            closed: {
              text: '已解决',
              status: 'Success',
            },
          },
        },
        {
          title: '状态2',
          key: 'state2',
          dataIndex: 'state2',
          renderFormItem: () => {
            return <Input />;
          },
        },
        {
          title: '时间',
          key: 'date',
          dataIndex: 'date',
          valueType: 'date',
        },
        {
          title: 'money',
          key: 'money',
          dataIndex: 'money',
          valueType: 'money',
        },
        {
          title: '操作',
          valueType: 'option',
          render: () => [
            <a target="_blank" rel="noopener noreferrer" key="link">
              链路
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="warning">
              报警
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="view">
              查看
            </a>,
          ],
        },
      ]}
    >
      <ProDescriptions.Item label="百分比" valueType="percent">
        100
      </ProDescriptions.Item>
    </ProDescriptions>
  );
};
