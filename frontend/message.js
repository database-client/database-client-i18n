export default {
  common: {
    new: 'New',
    create: 'Create',
    cancel: 'Cancel',
    ok: 'OK',
    refresh: 'Refresh',
    update: 'Update',
    choose: 'Choose',
    close: 'Close',
    name: 'Name',
    type: 'Type',
    comment: 'Comment',
    default: 'Default',
    readonly: 'This connection is read-only!'
  },
  state: {
    viewType: 'View Type:',
    rowHeight: 'Row Height:',
    fontSize: 'Font Size:',
    textAlign: 'Text Align:',
    borderType: 'Border:',
    showComment: 'Show Comment:',
    columnConfig: 'Column Config',
    columnWidth: 'Column Width:',
    columnMaximumWidth: 'Column Maximum Width:',
  },
  notice: {
    copySuccess: 'Copied successfully!'
  },
  design: {
    table: 'Name',
    collate: 'Collate',
    check: 'Check',
    clause: 'Clause',
    operation: 'Operation',
    newIndex: 'New Index',
    newCheck: 'New Check',
    newForeignKey: 'New Foreign Key',
    newColumn: 'New Column',
    updateColumn: 'Update Column',
    column: 'Column',
    foreignKey: 'Foreign Key',
    length: 'Length',
    isPrimary: 'Primary Key',
    isUnique: 'UNIQUE',
    isAutoIncrement: 'Auto Increment',
    isNotNull: 'Not Null',
    index: 'Index',
    indexName: 'Index Name',
    indexMethod: 'Index Method',
    unique: 'Unique',
    foreignKeyName: 'Foreign Key Name',
    constraintName: 'Constraint Name',
    referencedTable: 'Referenced Table',
    referencedColumn: 'Referenced Column',
    updateRule: 'Update Rule',
    deleteRule: 'Delete Rule',
    ddl: 'DDL',
    deleteColumnConfirm: 'Are you sure to delete this column?',
    deleteIndexConfirm: 'Are you sure to delete this index?',
    deleteCheckConfirm: 'Are you sure to delete this check?',
    deleteFkConfirm: 'Are you sure to delete this foreign key?',
    updateSuccess: 'Update success!',
  },
  table: {
    data: 'DATA',
    design: 'Properties',
    process: 'Process',
    monitor: 'Monitor',
    erDiagram: 'ER Diagram',
  },
  sshStatus: {
    systemInfo: 'System Info',
    cpuInfo: 'CPU Info',
    cpuName: 'Name',
    cpuClock: 'Clock',
    cpuCoreCount: 'Logic Core Count',
    hostname: 'Host Name',
    os: 'OS',
    arch: 'Architecture',
    runTime: 'Run Time',
    kernelVersion: 'Kernel Version',
    systemStatus: 'System Status',
    memory: 'Memory',
    disk: 'Disk',
    network: 'Network',
  },
  util: {
    common: 'Common',
    translate: 'Translate',
    img2Base64: 'Image To Base64',
    qrcode: 'QR Code',
  },
  global: {
    'changeLog': 'Changes',
    'document': 'Document',
    'util': 'Util',
    'console': 'Console',
    'plan': 'Plan',
    'login': 'Login',
    'logout': 'Log out',
  },
  connect: {
    dm: 'DM8',
    use: 'Use',
    title: 'Connect to server',
    name: 'Name',
    connectionName: 'Connection Name',
    group: 'Group',
    groupPlaceholder: 'Parent/Sub',
    readOnly: 'Read Only',
    savePassword: 'Save Password',
    savePasswordForever: 'Yes',
    savePasswordNever: 'No',
    scope: 'Scope',
    option: 'Option',
    success: 'Success!',
    error: 'Connection error!',
    global: 'Global',
    current: 'Workspace',
    connecting: 'Connect',
    socketPath: 'Socket Path',
    connectionType: 'Connection Type',
    save: 'Save',
    enable: 'Enable',
    main: 'Main',
    socksProxy: 'Socks Proxy',
    httpProxy: 'HTTP Proxy',
    connectTimeout: 'Timeout(ms)',
    requestTimeout: 'Request Timeout',
    hideSystemSchema: 'Hide System Schema',
    connectString: 'Connection String',
    usingConnectString: 'Use Connection String',
    chooseSqlite: 'Choose Database File',
    advance: 'Advance',
    algorithm: 'Algorithm',
    ftpEncoding: 'Encoding',
    protocol: 'Protocol',
    coLatestVersion: 'Latest Version',
    pruneSFTPRoot: 'Prune Root',
    showHiddenFiles: 'Show Hidden Files',
    mongoNotice: 'MongoDB has less support, only recommended for browsing data.',
    s3Notice: 'Support connect to any service compatible with aws s3 protocol, such as Minio.',
    hasDockerNotice: 'Check that Docker is installed, you can connect directly via the connect button.',
  },
  treeFeature: {
    type: 'Type',
    event: 'Event',
    sequence: 'Sequence',
    foreignTable: 'Foreign Table',
    materializedView: 'Materialized View',
  },
  ssh: {
    util: 'Util',
    theme: 'Theme',
    shell: 'Shell to be executed after opening the terminal.',
    portForward: {
      local: 'Forward destination address from remote server to local.',
      remote: 'Forward local address to remote server.',
      dynamic: 'Create a local socks proxy using a remote server.',
    }
  },
  config: {
    plain: 'Config',
    features: 'Features',
    sslConfig: 'SSL Config',
    usingCustomDatabaseName: 'Using Custom Databases',
    serverType: 'Server Type',
    more: 'More',
    host: 'Host',
    port: 'Port',
    account: 'Account',
    username: 'Username',
    password: 'Password',
    passphrase: 'Passphrase',
    key: 'Key',
    auto: 'Auto',
    privateKeyAndPassword: 'Private Key and Password',
    database: 'Database',
    databaseNumber: 'Number of databases',
    dbPath: 'Database Path',
    mongoAuthSource: 'Auth Database',
    databasePlaceholder: 'Database',
    dialect: 'Dialect',
    driverName: 'Driver Name',
    driverPath: 'Driver Path',
    showedBuckets: 'Showed Buckets',
    showedDatabases: 'Showed Databases',
    privateKeyPath: 'Private Key Path',
    timeZone: 'Time Zone',
    groupingTables: 'Grouping Tables',
    groupingThreshold: 'Grouping Threshold',
  },
  offline: {
    online: 'Just Log in with your premium account, no machine limit.',
    detail: "Get the machine Id and go to <a href='https://database-client.com/#/console/license'>License</a> to generate, each account can get up to 3 offline license.",
    getMachineId: 'Get Machine Id',
    activate: 'Activate',
  },
  result: {
    export: 'Export',
    exportToEditor: 'Export To Editor',
    exportOption: 'Export Option',
    importExternal: 'Import External Data',
    editData: 'Edit Data',
    exportType: 'Type',
    exportSQL: 'Output SQL to separate sheet',
    removeLimit: 'Remove Pagination SQL',
    insert: 'Insert',
    update: 'Update',
    confirm: 'Confirm',
    searchNotice: 'Search results',
    deleteNotice: 'No row selected!',
    cost: 'Cost',
    copy: 'Copy',
    copyAsCSV: 'Copy As CSV',
    copyColumns: 'Copy Values',
    editDialog: 'Edit Row',
    copyDialog: 'Copy Row',
    setNull: 'Set NULL',
  },
  pay: {
    connectNotice: "<span class='red'>Note</span>: Extension requires <a href='https://database-client.com/#/plan'>payment</a> to unlock all features(Limit 3 connections).",
    notice: 'If this project is helpful to you, please consider purchasing premium to support.',
    freePlanInstalled: 'Installed',
    buyPlan: 'Buy Now',
  },
  toolbar: {
    reportIssue: 'Report issue',
    clearCache: 'Clear Cache',
    payAdvice: 'Premium account will remove this badge',
    noPkUpdateConfirm: "No primary key found, <span class='red'>this change might affect more records than expected!</span> Are you sure to save the modification? (Not Recommended)",
  },
  console: {
    treeOptions: 'TreeView',
    sqlOptions: 'SQL',
    resultOptions: 'Result',
    editorOptions: 'Editor',
    configuration: 'Connection Configuration',
    resetConfig: 'Reset',
    edit: 'Edit',
    export: 'Export',
    import: 'Import',
    sync: 'Cloud Sync',
    autoSync: 'Auto Sync (Via VS Code account)',
    uploadConfirm: 'Do you confirm to upload the configuration?',
    mergeConfirm: 'There is already created connection, select the action you want to perform',
    removeConfirm: 'Are you sure remove cloud sync content?',
    merge: 'Merge',
    overwrite: 'Overwrite',
    upload: 'Upload',
    remove: 'Remove',
    download: 'Download',
  },
  plan: {
    activation: 'Activation',
    perYear: 'Per Year',
    installed: 'Installed',
    free: 'Free',
    about: 'About Project',
    document: 'Document',
    freeTier: 'Free Tier',
    buyNow: 'Buy Now',
    bought: 'Unlocked',
    basicNotice: 'Available for commercial usage and no ads.',
    basicSQLCompletion: 'SQL Completion',
    premiumDesc: 'For engineers looking to boost productivity',
    otherFeature: 'SFTP Saver, SQL History Support',
    freeLimitConnection: 'Limit 3 connections',
    unlimitedMachine: 'Unlimited Machines',
    unlimitedConnection: 'Unlimited Connections',
    cloudSync: 'Cloud Config Sync',
    workLevelConnection: 'Workspace Level Connection',
    intelliSenseSQLCompletion: 'More IntelliSense SQL Completion',
  }
}