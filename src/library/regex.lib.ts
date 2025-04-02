
/**
 * This library holdes all the regex we will be using in this project
 * @class RegexLibrary
 */
export class RegexLibrary {
  public static MAIL =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public static TEMPLATE_HEADER_ADD_VARIABLE = /{{[1]}}/;

  public static TEMPLATE_BODY_ADD_VARIABLE = /({{\d?\d}})/gm;

  public static TEMPLATE_BODY_ADD_VARIABLE_MISMATCH_END_BRACKETS =
    /({{\d?\d})/gm;

  public static TEMPLATE_BODY_ADD_VARIABLE_MISMATCH_START_BRACKETS =
    /({\d?\d}})/gm;

  public static HTML_BODY_TEXT = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

  public static HTML_HEADER_TEXT = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

  public static ALPHA_NUMERIC = /^[a-zA-Z0-9_]+$/;

  public static PHONE_NUMBER = /^\d{8,20}$/;

  // To validate and replace special character for contact number fields
  public static REPLACE_SPECIAL_CHARACTERS = /^^-?\d+(.\d+)?$/;

  // To validate phone number on Contact page
  public static VALIDATE_PHONE_NUMBER = /^\+?\d{0,15}$/;

  public static SEARCH_CONTACTS = /[^A-Z0-9]+/gi;

  public static SEARCH_CONTACT_NUMBER = /^\+?\d{1,3}[\s-]?\d{3,14}$/gm;

  public static URL =
    /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

  public static GUID =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

  public static FILE_PATH = /^.*\/assets\//;

  public static CHECK_WHITESPACE = /^.*\/assets\//;

  public static CHECK_CSV = /\.(csv)$/i;

  public static REMOVE_HTML_TAG = /(<([^>]+)>)/gi;

  public static ATTACHMENT_EXTENSIONS =
    /(\.jpg|\.jpeg|\.png|\.pdf|\.doc|\.mp3|\.mp4|\.csv|\.ppt|\.xlsx|\.gif|\.docx|\.odp|\.odt)$/i;

  public static CONVERT_SPACE_TO_DASH = /\s+/g;

  /** Deny Instanciation of this Class */
  constructor() {
    throw new Error(
      'Cannot instanciate this Class, please use only for static members',
    );
  }
}

export default RegexLibrary;
