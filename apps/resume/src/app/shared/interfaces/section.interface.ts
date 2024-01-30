export interface InformationSection {
  ANCHORS: string;
  DESCRIPTION: string;
}

export interface InformationSet {
  [_: string]: string[];
}

export interface InformationOffset {
  [_key: string]: number;
}
