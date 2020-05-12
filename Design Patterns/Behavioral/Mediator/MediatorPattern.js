$(document).ready(function () {

    const BugStatus = {
        OPEN: "open",
        ASSIGNED: "assigned",
        FIXED: "fixed",
        TESTED: "tested",
        CLOSED: "closed"
    }

    const Team = {
        UNKNOWN: "unknown",
        DEVELOPMENT: "dev",
        TEST: "test",
        VERIFICATION: "verification"
    }

    class Bug {

        constructor(bugId, details) {
            this.bugId = bugId;

            this.details = details;

            this.status = BugStatus.OPEN;
            this.team = Team.UNKNOWN;

        }
    }

    let teamManager = (function () {

        return {

            assignTo: function (bug, team) {
                bug.team = team;

                if (team !== Team.UNKNOWN) {
                    console.log("Assigned bug", bug.bugId, "to team", team,
                        "notified manager");
                } else {
                    console.log("Bug", bug.bugId,
                        "is currently not assigned to any team");
                }
            }
        }
    })();

    let bugWorkflowManager = (function () {

        class BugWorkflow {

            constructor() {
                this.bugMap = {};
            }

            getRandomDetails() {
                let details = ["Production site not working",
                    "UI needs to be updated with new theme",
                    "Interface seems to be slow",
                    "Some unit tests are failing",
                    "Merge conflicts need resolution"];

                return details[Math.floor(Math.random() * details.length)];
            }

            getBug(bugId) {
                if (!this.bugMap[bugId]) {
                    throw Error("Bug does not exist " + bugId);
                }

                return this.bugMap[bugId];
            }

            createBug() {
                let randomId = "bug-" + Math.floor(Math.random() * 100);

                let bug = new Bug(randomId, this.getRandomDetails());

                this.bugMap[bug.bugId] = bug;

                teamManager.assignTo(bug, Team.UNKNOWN);

                $(document).trigger("bug-updated", bug.bugId);
            }

            debugging(bugId) {
                let bug = this.bugMap[bugId];

                bug.status = BugStatus.ASSIGNED;
                teamManager.assignTo(bug, Team.DEVELOPMENT);

                $(document).trigger("bug-updated", bug.bugId);
            }

            fixed(bugId) {
                let bug = this.bugMap[bugId];

                bug.status = BugStatus.FIXED;
                teamManager.assignTo(bug, Team.TEST);

                $(document).trigger("bug-updated", bug.bugId);
            }

            tested(bugId) {
                let bug = this.bugMap[bugId];

                bug.status = BugStatus.TESTED;
                teamManager.assignTo(bug, Team.VERIFICATION);

                $(document).trigger("bug-updated", bug.bugId);
            }

            closed(bugId) {
                let bug = this.bugMap[bugId];

                bug.status = BugStatus.CLOSED;
                teamManager.assignTo(bug, Team.UNKNOWN);

                $(document).trigger("bug-updated", bug.bugId);
            }


        }

        return {
            bugWorkflow: new BugWorkflow()
        }

    })();

    function displayBugStatus(event, bugId) {
        let bug = bugWorkflowManager.bugWorkflow.getBug(bugId);

        let html = "Bug Id: " + bugId + "<br/>Details: " + bug.details +
            "<br/>Status: " + bug.status + "<br/>Team: " + bug.team;

        $("#bug-details").html(html);

        $("#bug-id-input").val(bugId);
    }

    $(document).on("bug-updated", displayBugStatus);

    $('#create-bug')
        .on("click", function () {
            bugWorkflowManager.bugWorkflow.createBug();

            console.log(bugWorkflowManager.bugWorkflow);
        });

    $('#status-debugging')
        .on("click", function () {
            let bugId = $("#bug-id-input").val();

            bugWorkflowManager.bugWorkflow.debugging(bugId);
        });

    $('#status-fixed')
        .on("click", function () {
            let bugId = $("#bug-id-input").val();

            bugWorkflowManager.bugWorkflow.fixed(bugId);
        });

    $('#status-tested')
        .on("click", function () {
            let bugId = $("#bug-id-input").val();

            bugWorkflowManager.bugWorkflow.tested(bugId);
        });

    $('#status-closed')
        .on("click", function () {
            let bugId = $("#bug-id-input").val();

            bugWorkflowManager.bugWorkflow.closed(bugId);
        });

});