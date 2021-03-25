import React, { Component, Fragment } from 'react';
import { Button, Modal, Spin } from 'antd';
import './printExample.less';
import ReactToPrint from 'react-to-print';

class printExample extends Component {
    state = {
        show: false,
        loading: true
    }
    getDom() {
        return (
            <Fragment>
                <div className="print_box" ref={el => (this.componentRef = el)}>
                    <div className="box box1">
                        <p className="title">第一个框</p>
                        <div className="container">
                            <div className="content">我是内容</div>
                        </div>
                    </div>
                    <div className="box box2">
                        <p className="title">第二个框</p>
                        <div className="container">
                            <div className="content">我是内容</div>
                        </div>
                    </div>
                </div>
                <ReactToPrint
                    trigger={() => {
                    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                    // to the root node of the returned component as it will be overwritten.
                    return <Button type="primary">点击导出</Button>;
                    }}
                    content={() => this.componentRef}
                />
            </Fragment>
            
        )
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={() => this.setState({show: true})}>弹出浮窗</Button>
                <Modal
                    title="审批"
                    visible={this.state.show}
                    width='800px'
                    className='contract-approval-wrap'
                    okText='同意'
                    cancelText='拒绝'
                    footer={null}>
                        <Button type="primary" onClick={() => this.setState({loading: false})}>关闭loading</Button>
                        <Spin spinning={this.state.loading}>
                            {this.getDom()}
                        </Spin>
                </Modal>
            </div>
        
        );
    }
}

export default printExample;