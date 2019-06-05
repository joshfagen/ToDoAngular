export class Task {
  title: string;
  details: string;
  deadline: Date;
  emergency: boolean;

  constructor(args?) {
    if (args) {
      this.title = args.title;
      this.details = args.details;
      this.deadline = args.deadline;
      this.emergency = args.emergency;

    }
  }

}
