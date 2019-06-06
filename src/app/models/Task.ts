export class Task {
  title: string;
  details: string;
  deadline: Date;
  urgent: boolean;

  constructor(args?) {
    if (args) {
      this.title = args.title;
      this.details = args.details;
      this.deadline = args.deadline;
      this.urgent = args.emergency;

    }
  }

}
