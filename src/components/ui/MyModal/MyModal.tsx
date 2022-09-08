import React from 'react';
import classes from './MyModal.module.css'

const MyModal = (/*{children, visiable, setVisiable}*/) => {

    const rootClasses = [classes.myModal]
/*    if (visiable) {
        rootClasses.push(classes.active)
    }*/


    return (
        <div className={rootClasses.join(' ')} /*onClick={() => setVisiable(false)}*/>
            <div className={classes.myModelContent} onClick={(e) => e.stopPropagation()}>
                {/*{children}*/}
            </div>
        </div>
    );
};

export default MyModal;