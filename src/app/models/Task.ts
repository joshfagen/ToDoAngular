export class Task {
  title: string;
  details: string;
  deadline: Date;
  dateCompleted: Date;
  urgent: boolean;

  constructor(args?) {
    if (args) {
      this.title = args.title;
      this.details = args.details;
      this.deadline = args.deadline;
      this.dateCompleted = args.dateCompleted;
      this.urgent = args.urgent;

    }
  }

}
