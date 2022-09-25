import {Component, ErrorInfo, ReactNode} from "react";
import classes from './ErrorBoundary.module.css'

interface Props {
    children?: ReactNode
}
interface State {
    hasError: boolean
}
export default class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false,
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            hasError: true,
        })
    }

    render() {
        if (this.state.hasError) {
            return <h2 className={classes['error-boundary__title']}>Ошибка произошла и была поймана...</h2>
        }

        return this.props.children
    }
}