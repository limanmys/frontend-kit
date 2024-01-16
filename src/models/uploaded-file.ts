export interface IUploadedFile {
  offset: number;
  name: string;
  size: number;
  checksum: string;
  location: string;
  file_path: string;
  metadata: IMetadata;
  created_at: string;
  expires_at: string;
  upload_type: string;
}

export interface IMetadata {
  filename: string;
  filetype: string;
}
