
export interface PJ {
  /** The content (Buffer) of the attachment in base64 format. */
  content: string;

  /**
  Name of the file (the attachment).
  */
  name: string;

  /**
  Mime-type of the attachment. For example: "application/pdf".
  */
  type: "image/gif" |
    "image/jpeg" |
    "image/pjpeg" |
    "image/jpg" |
    "image/bmp" |
    "image/png" |
    "image/x-png" |
    "image/tiff" |
    "image/tif" |
    "application/pdf" |
    "application/vnd.ms-excel" |
    "application/msword" |
    "application/vnd.ms-powerpoint" |
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" |
    "application/vnd.openxmlformats-officedocument.presentationml.presentation" |
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" |
    "application/vnd.oasis.opendocument.text" |
    "text/plain";
}

export interface Attachment {
  etat: boolean;
  document_id: number;
  date_time: string;
  name: string;
  token: string;
  link: string;
  thumbnail: string;
  download: string;
  baseURL: string;
}