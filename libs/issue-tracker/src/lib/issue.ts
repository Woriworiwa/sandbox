export interface Issue {
  issueNo: number;
  title: string;
  description: string;
  priority: 'low' | 'high';
  type: 'Feature' | 'Bug' | 'Documentation';
  completed?: Date;
}


// add this to styles "node_modules/@clr/ui/clr-ui.min.css",
