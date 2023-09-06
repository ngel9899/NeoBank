export const arrContinuationOfTheApplicationTop = [
  {
    label: 'What\'s your gender',
    caption: 'gender',
    name: 'gender',
    select: true,
    required: true,
    errorText: 'Select one of the options',
    option: ['MALE', 'FEMALE'],
  } as const,
  {
    label: 'Your marital status',
    caption: 'maritalStatus',
    name: 'maritalStatus',
    select: true,
    required: true,
    errorText: 'Select one of the options',
    option: ['MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER'],
  } as const,
  {
    label: 'Your number of dependents',
    caption: 'dependentAmount',
    type: 'number',
    placeholder: '',
    name: 'dependentAmount',
    select: false,
    required: true,
    maxLength: 2,
    minLength: 1,
    pattern: /^(?! )(?!.* $)(?! )(\d*$)/,
    errorText: 'Select one of the options',
  } as const,
  {
    label: 'Date of issue of the passport',
    caption: 'passportIssueDate',
    type: 'text',
    placeholder: 'Select Date and Time',
    name: 'passportIssueDate',
    select: false,
    required: true,
    pattern: /^[A-Za-z\d]+$/,
    errorText: 'Incorrect date of passport issue date',
    big: true,
  } as const,
  {
    label: 'Division code',
    caption: 'passportIssueBranch',
    type: 'text',
    placeholder: '000000',
    name: 'passportIssueBranch',
    select: false,
    required: true,
    maxLength: 6,
    minLength: 6,
    pattern: /^(?! )(?!.* $)(?! )(\d*$)/,
    errorText: 'Incorrect date of passport issue date',
    big: true,
  } as const,
];

export const arrContinuationOfTheApplicationBot = [
  {
    label: 'Your employment status',
    caption: 'employmentStatus',
    name: 'employmentStatus',
    select: true,
    required: true,
    errorText: 'Select one of the options',
    option: ['UNEMPLOYED', 'SELF_EMPLOYED', 'EMPLOYED', 'BUSINESS_OWNER'],
  } as const,
  {
    label: 'Your employer INN',
    caption: 'employerINN',
    type: 'number',
    placeholder: '000000000000',
    name: 'employerINN',
    select: false,
    required: true,
    pattern: /^(?! )(?!.* $)(?! )(\d*$)/,
    errorText: 'Department code must be 12 digits',
  } as const,
  {
    label: 'Your salary',
    caption: 'salary',
    type: 'number',
    placeholder: 'For example 100 000',
    name: 'salary',
    select: false,
    required: true,
    pattern: /^[A-Za-z\d]+$/,
    errorText: 'Enter your salary',
  } as const,
  {
    label: 'Your position',
    caption: 'position',
    name: 'position',
    select: true,
    required: true,
    errorText: 'Incorrect date of passport issue date',
    option: ['WORKER', 'MID_MANAGER', 'TOP_MANAGER', 'OWNER'],
  } as const,
  {
    label: 'Your work experience total',
    caption: 'workExperienceTotal',
    type: 'number',
    placeholder: 'For example 10',
    name: 'workExperienceTotal',
    select: false,
    required: true,
    pattern: /^[A-Za-z\d]+$/,
    errorText: 'Enter your work experience total',
  } as const,
  {
    label: 'Your work experience current',
    caption: 'workExperienceCurrent',
    type: 'number',
    placeholder: 'For example 2',
    name: 'workExperienceCurrent',
    select: false,
    required: true,
    pattern: /^[A-Za-z\d]+$/,
    errorText: 'Enter your work experience current',
  } as const,
];