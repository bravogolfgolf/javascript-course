class Display extends React.Component {

    render() {

        const style = {
            color: this.props.color,
            backgroundColor: this.props.backgroundColor
        }

        return (
            <div className="details" style={style}>
                Bug status: {this.props.status.toUpperCase()}
            </div>
        );
    }

}

const Status = {
    UNASSIGNED: "unassigned",
    ASSIGNED: "assigned",
    DEBUGGING: "debugging",
    FIXED: "fixed",
    TESTED: "tested",
    CLOSED: "closed"
}

const Priority = {
    NONE: "none",
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high"
}

class StateManager extends React.Component {
    state = {
        status: Status.UNASSIGNED,
        priority: Priority.LOW,
        color: "white",
        backgroundColor: "blue"
    }

    changeStatus = (e) => {

        var newStatus = e.target.name;
        this.setState(function (prevState) {

            if (newStatus == Status.FIXED && !(prevState.status == Status.DEBUGGING)) {
                console.log("Cannot change status to FIXED unless current status is DEBUGGING");

                return {};
            }

            if (newStatus == Status.TESTED && !(prevState.status == Status.FIXED)) {
                console.log("Cannot change status to TESTED unless current status is FIXED");

                return {};
            }

            if (newStatus == Status.CLOSED && prevState.status == Status.FIXED) {
                console.log("Cannot change status to CLOSED when current status is FIXED, fixes need to be tested");

                return {};
            }

            return {
                status: newStatus
            }

        });
    }

    changePriority = (e) => {

        var newPriority = e.target.name;
        this.setState(function (prevState) {

            var color = prevState.color;
            var backgroundColor = prevState.backgroundColor;

            if (newPriority == Priority.NONE) {
                color = "white";
                backgroundColor = "green";
            } else if (newPriority == Priority.LOW) {
                color = "white";
                backgroundColor = "blue";
            } else if (newPriority == Priority.MEDIUM) {
                color = "black";
                backgroundColor = "orange";
            } else if (newPriority == Priority.HIGH) {
                color = "white";
                backgroundColor = "red";
            }

            return {
                priority: newPriority,
                color: color,
                backgroundColor: backgroundColor
            }

        });

    }

    render() {

        return (

            <div>
                <Display color={this.state.color}
                         backgroundColor={this.state.backgroundColor}
                         status={this.state.status}/>

                <div>
                    <button className="button" name="unassigned"
                            onClick={this.changeStatus}>
                        UNASSIGNED
                    </button>

                    <button className="button" name="assigned"
                            onClick={this.changeStatus}>
                        ASSIGNED
                    </button>

                    <button className="button" name="debugging"
                            onClick={this.changeStatus}>
                        DEBUGGING
                    </button>

                    <button className="button" name="fixed"
                            onClick={this.changeStatus}>
                        FIXED
                    </button>

                    <button className="button" name="tested"
                            onClick={this.changeStatus}>
                        TESTED
                    </button>

                    <button className="button" name="closed"
                            onClick={this.changeStatus}>
                        CLOSED
                    </button>
                </div>

                <div>
                    <button className="button-p" name="none"
                            onClick={this.changePriority}>
                        NONE
                    </button>

                    <button className="button-p" name="low"
                            onClick={this.changePriority}>
                        LOW
                    </button>

                    <button className="button-p" name="medium"
                            onClick={this.changePriority}>
                        MEDIUM
                    </button>

                    <button className="button-p" name="high"
                            onClick={this.changePriority}>
                        HIGH
                    </button>
                </div>
            </div>

        );
    }

}

ReactDOM.render(<StateManager/>, document.getElementById('react-update-state'));












































