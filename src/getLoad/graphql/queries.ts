export const getLoadQuery = `fragment AccountingOrderInfo on Order {
    __typename
    id
    isInvoiceRequirementBypassed
    taxExempt
  }
  fragment AddressBrief on Address {
    __typename
    addressType {
      __typename
      ...KeyValueInfo
    }
    addressTypeId
    addressableId
    addressableType
    city
    country
    geopoint {
      __typename
      lat
      lon
    }
    id
    isVerified
    main
    postalCode
    riskInfoSource
    state
    street1
    street2
    thirdPartyId
  }
  fragment AppointmentV2ForCCAInfo on AppointmentV2 {
    __typename
    confirmed
    id
    requestedEnd {
      __typename
      timezone
      value
    }
    requestedStart {
      __typename
      timezone
      value
    }
    requestedTimeRange {
      __typename
      endOffsetMs
      id
      startOffsetMs
    }
    status
  }
  fragment AppointmentV2Info on AppointmentV2 {
    __typename
    autoSchedule
    changedBy @skip(if: $useEmployeeV2) {
      __typename
      employeeDisplayName
      id
    }
    changedByV2 @include(if: $useEmployeeV2) {
      __typename
      employeeDisplayName
      id
    }
    confirmed
    createdAt
    id
    requestedEnd {
      __typename
      timezone
      value
    }
    requestedStart {
      __typename
      timezone
      value
    }
    requestedTimeRange {
      __typename
      endOffsetMs
      id
      startOffsetMs
    }
    status
    updatedAt
  }
  fragment BookingSource on RouteVendorV2 {
    __typename
    bookingSource {
      __typename
      id
      name
    }
  }
  fragment BounceInfoV2 on BounceV2 {
    __typename
    active
    bounceReason {
      __typename
      active
      description
      id
      name
    }
    bounceType {
      __typename
      active
      description
      id
      name
    }
    createdAt
    createdByUser {
      __typename
      employee {
        __typename
        ...EmployeeSimple
      }
      id
    }
    id
    notes
    rebooked
    rebookedAt
    rebookedByUser {
      __typename
      employee {
        __typename
        ...EmployeeSimple
      }
      id
    }
    routeVendor {
      __typename
      id
      routeVendorCost {
        __typename
        totalCost
      }
      vendor {
        __typename
        id
        name
      }
      vendorType
    }
  }
  fragment CarrierAddressBrief on CarrierAddress {
    __typename
    addressType {
      __typename
      ...KeyValueInfo
    }
    addressTypeId
    carrierId
    city
    country
    createdAt
    geopoint {
      __typename
      lat
      lon
    }
    id
    isVerified
    main
    postalCode
    riskInfoSource
    state
    street1
    street2
    thirdPartyId
    updatedAt
  }
  fragment CarrierContactInfo on CarrierContact {
    __typename
    chatType {
      __typename
      ...KeyValueInfo
    }
    chatTypeId
    chatUsername
    contactTypeId
    emailAddress
    extension
    faxNumber
    id
    main
    main
    name
    phoneNumber
    riskInfoSource
    thirdPartyId
  }
  fragment CarrierCustomerRelationshipInfo on CarrierCustomerRelationship {
    __typename
    active
    bypassCompliance
    canLoad
    carrier {
      __typename
      code
      id
      name
    }
    createdAt
    createdBy {
      __typename
      employee {
        __typename
        firstName
        id
        lastName
      }
    }
    customer {
      __typename
      id
      name
    }
    id
    notes {
      __typename
      id
      noteType
      text
    }
    relationshipType
    updatedAt
    updatedBy {
      __typename
      employee {
        __typename
        firstName
        id
        lastName
      }
    }
  }
  fragment CarrierCustomerRelationshipInfoV2 on CarrierCustomerRelationshipV2 {
    __typename
    active
    bypassCompliance
    canLoad
    carrier {
      __typename
      code
      id
      name
    }
    createdAt
    createdBy {
      __typename
      employee {
        __typename
        firstName
        id
        lastName
      }
    }
    customer {
      __typename
      id
      name
    }
    id
    notes {
      __typename
      id
      noteType
      text
    }
    relationshipType
    updatedAt
    updatedBy {
      __typename
      employee {
        __typename
        firstName
        id
        lastName
      }
    }
  }
  fragment CarrierElectronictrackingInfo on CarrierElectronicTracking {
    __typename
    electronicTrackingMethod {
      __typename
      id
      name
    }
    electronicTrackingMethodId
    electronicTrackingType {
      __typename
      id
      name
    }
    electronicTrackingTypeId
    id
    priority
  }
  fragment CarrierGroupInfo on CarrierGroup {
    __typename
    carrierId
    employeeDivision {
      __typename
      ...KeyValueInfo
    }
    employeeDivisionId
    employeeGroup {
      __typename
      ...KeyValueInfo
    }
    employeeGroupId
    groupType {
      __typename
      ...KeyValueInfo
    }
    groupTypeId
    id
  }
  fragment CarrierIdentifierInfo on CarrierIdentifier {
    __typename
    carrierIdentifierTypeId
    code
    id
    link
  }
  fragment CarrierIdentifierInfoV2 on CarrierIdentifierV2 {
    __typename
    carrierIdentifierTypeId
    code
    id
    link
  }
  fragment CarrierInfo on Carrier {
    __typename
    accountingNotes {
      __typename
      ...NoteInfo
    }
    accountingStatus
    addresses {
      __typename
      ...AddressBrief
    }
    audits {
      __typename
      ... on CarrierRepAudit {
        __typename
        actionType
        auditableRep {
          __typename
          employee {
            __typename
            employeeDisplayName
            fullName
            id
          }
        }
        createdAt
        createdByEmployee {
          __typename
          employeeDisplayName
          id
        }
        currentValue {
          __typename
          employeeId
          main
          repType
        }
        id
        previousValue {
          __typename
          employeeId
          main
          repType
        }
      }
    }
    carrierIdentifiers {
      __typename
      ...CarrierIdentifierInfo
    }
    carrierPaymentTermId
    code
    confirmationNotes {
      __typename
      ...NoteInfo
    }
    contacts {
      __typename
      ...ContactInfo
    }
    currencyId
    customerRelationships {
      __typename
      ...CarrierCustomerRelationshipInfo
    }
    dbaName
    descendantIds
    dotNumber
    dunsNumber
    electronicTrackingMethod {
      __typename
      ...KeyValueInfo
    }
    electronicTrackingType {
      __typename
      ...KeyValueInfo
    }
    entityType
    externalStatus
    id
    insurances {
      __typename
      ...CarrierInsuranceInfo
    }
    invoiceDistributionMethodId
    mainAddress {
      __typename
      ...AddressBrief
    }
    manualTrackingInformation
    manualTrackingMethod
    mcNumber
    name
    notes
    operatingStatus
    parent {
      __typename
      code
      id
      name
    }
    paymentMethodId
    phoneNumber
    remitToCarrier {
      __typename
      code
      id
      name
    }
    remittanceAddress {
      __typename
      id
    }
    remittanceEmail
    remittanceGrouping
    reps {
      __typename
      ...RepInfo
    }
    safetyRating
    scacNumber
    standing {
      __typename
      ...CarrierStandingInfo
    }
    status
  }
  fragment CarrierInfoV2 on CarrierV2 {
    __typename
    accountingNotes {
      __typename
      ...CarrierNoteInfo
    }
    accountingStatus
    addresses {
      __typename
      ...CarrierAddressBrief
    }
    audits {
      __typename
      ... on CarrierRepAuditV2 {
        __typename
        actionType
        auditableRep {
          __typename
          employee {
            __typename
            employeeDisplayName
            fullName
            id
          }
        }
        createdAt
        createdByEmployee {
          __typename
          employeeDisplayName
          id
        }
        currentValue {
          __typename
          employeeId
          main
          repType
        }
        id
        previousValue {
          __typename
          employeeId
          main
          repType
        }
      }
    }
    carrierIdentifiers {
      __typename
      ...CarrierIdentifierInfoV2
    }
    carrierPaymentTermId
    code
    complianceEmail
    confirmationNotes {
      __typename
      ...CarrierNoteInfo
    }
    contacts {
      __typename
      ...CarrierContactInfo
    }
    currencyId
    customerRelationships {
      __typename
      ...CarrierCustomerRelationshipInfoV2
    }
    dbaName
    descendantIds
    dotNumber
    dunsNumber
    electronicTrackingMethod {
      __typename
      ...KeyValueInfo
    }
    electronicTrackingType {
      __typename
      ...KeyValueInfo
    }
    electronicTrackings {
      __typename
      ...CarrierElectronictrackingInfo
    }
    entityType
    externalStatus
    groups {
      __typename
      ...CarrierGroupInfo
    }
    id
    insurances {
      __typename
      ...CarrierInsuranceInfoV2
    }
    invoiceDistributionMethodId
    mainAddress {
      __typename
      ...CarrierAddressBrief
    }
    manualTrackingInformation
    manualTrackingMethod
    mcNumber
    name
    notes
    operatingStatus
    parent {
      __typename
      code
      id
      name
    }
    paymentMethodId
    phoneNumber
    remitToCarrier {
      __typename
      code
      id
      name
    }
    remittanceAddress {
      __typename
      id
    }
    remittanceEmail
    remittanceGrouping
    reps {
      __typename
      ...RepInfoV2
    }
    roeStatus
    safetyRating
    scacNumber
    standing {
      __typename
      ...CarrierStandingInfoV2
    }
    status
    website
  }
  fragment CarrierInsuranceInfo on CarrierInsurance {
    __typename
    cancelDate
    carrierInsuranceTypeId
    effectiveDate
    exemptions
    expirationDate
    id
    identification
    insurer
    limit
    producer
    rmisCovgId
    underwriterRating
  }
  fragment CarrierInsuranceInfoV2 on CarrierInsuranceV2 {
    __typename
    cancelDate
    carrierInsuranceTypeId
    effectiveDate
    exemptions
    expirationDate
    id
    identification
    insurer
    limit
    producer
    rmisCovgId
    underwriterRating
  }
  fragment CarrierNoteInfo on CarrierNote {
    __typename
    carrierId
    createdAt
    id
    noteType
    text
    updatedAt
  }
  fragment CarrierStandingInfo on CarrierStanding {
    __typename
    notes
    reasonCodeId
    statusTypeId
    typeId
    updatedAt
    updatedByUser {
      __typename
      employee {
        __typename
        fullName
        id
      }
      id
    }
  }
  fragment CarrierStandingInfoV2 on CarrierStandingV2 {
    __typename
    notes
    reasonCodeId
    statusTypeId
    typeId
    updatedAt
    updatedByUser {
      __typename
      employee {
        __typename
        fullName
        id
      }
      id
    }
  }
  fragment CommodityInfoV2 on CommodityV2 {
    __typename
    actualClass {
      __typename
      ...KeyValueInfo
    }
    actualDensity {
      __typename
      unit
      value
    }
    actualDensityV2 {
      __typename
      unit
      value
    }
    actualDimensions {
      __typename
      height(unit: in) {
        __typename
        unit
        value
      }
      length(unit: in) {
        __typename
        unit
        value
      }
      width(unit: in) {
        __typename
        unit
        value
      }
    }
    actualDimensionsV2 {
      __typename
      height {
        __typename
        unit
        value
      }
      length {
        __typename
        unit
        value
      }
      width {
        __typename
        unit
        value
      }
    }
    actualLinear(unit: ft) {
      __typename
      unit
      value
    }
    actualLinearV2 {
      __typename
      unit
      value
    }
    actualNMFCCode
    actualPieces
    actualVolume(unit: ft3) {
      __typename
      unit
      value
    }
    actualVolumeV2 {
      __typename
      unit
      value
    }
    actualWeight(unit: lbs) {
      __typename
      unit
      value
    }
    actualWeightV2 {
      __typename
      unit
      value
    }
    bottomLoadable
    customerCode
    description
    doNotStack
    expectedClass {
      __typename
      ...KeyValueInfo
    }
    expectedDensity {
      __typename
      unit
      value
    }
    expectedDensityV2 {
      __typename
      unit
      value
    }
    expectedDimensions {
      __typename
      height(unit: in) {
        __typename
        unit
        value
      }
      length(unit: in) {
        __typename
        unit
        value
      }
      width(unit: in) {
        __typename
        unit
        value
      }
    }
    expectedDimensionsV2 {
      __typename
      height {
        __typename
        unit
        value
      }
      length {
        __typename
        unit
        value
      }
      width {
        __typename
        unit
        value
      }
    }
    expectedLinear(unit: ft) {
      __typename
      unit
      value
    }
    expectedLinearV2 {
      __typename
      unit
      value
    }
    expectedNMFCCode
    expectedPieces
    expectedVolume(unit: ft3) {
      __typename
      unit
      value
    }
    expectedVolumeV2 {
      __typename
      unit
      value
    }
    expectedWeight(unit: lbs) {
      __typename
      unit
      value
    }
    expectedWeightV2 {
      __typename
      unit
      value
    }
    hazmat
    hazmatClass {
      __typename
      ...KeyValueInfo
    }
    hazmatPackagingGroup
    hazmatPhoneNumber
    hazmatUnitedNationsNumber
    id
    loadOnType {
      __typename
      ...KeyValueInfo
    }
    make
    maximumTemperature {
      __typename
      unit
      value
    }
    maximumTemperatureV2 {
      __typename
      unit
      value
    }
    minimumTemperature {
      __typename
      unit
      value
    }
    minimumTemperatureV2 {
      __typename
      unit
      value
    }
    model
    orderId
    overDimensional
    packagingCount
    packagingType {
      __typename
      ...KeyValueInfo
    }
    pieceType {
      __typename
      ...KeyValueInfo
    }
    preCoolTo {
      __typename
      unit
      value
    }
    preCoolToV2 {
      __typename
      unit
      value
    }
    serialNumbers
    shipments {
      __typename
      id
      name
    }
    stccCode
    temperatureControlled
    temperatureSetting
    topLoadable
    year
  }
  fragment ContactInfo on Contact {
    __typename
    chatType {
      __typename
      ...KeyValueInfo
    }
    chatTypeId
    chatUsername
    contactTypeId
    emailAddress
    extension
    faxNumber
    id
    main
    main
    name
    phoneNumber
    riskInfoSource
    thirdPartyId
  }
  fragment CurrencyInfoV2 on LoadCurrency {
    __typename
    unit
    value
  }
  fragment CustomerAddressBriefV2 on CustomerAddress {
    __typename
    addressType {
      __typename
      ...KeyValueInfo
    }
    addressTypeId
    addressableId
    addressableType
    city
    country
    geopoint {
      __typename
      lat
      lon
    }
    id
    isVerified
    main
    postalCode
    riskInfoSource
    state
    street1
    street2
    thirdPartyId
  }
  fragment CustomerOrderDimensionsInfo on CustomerOrderDimensions {
    __typename
    height(unit: in) {
      __typename
      unit
      value
    }
    length(unit: ft) {
      __typename
      unit
      value
    }
    width(unit: in) {
      __typename
      unit
      value
    }
  }
  fragment CustomerOrderInfoV2 on CustomerOrderV2 {
    __typename
    acceptedBy @skip(if: $useEmployeeV2) {
      __typename
      ...EmployeeSimple
    }
    acceptedByV2 @include(if: $useEmployeeV2) {
      __typename
      ...EmployeeSimpleV2
    }
    accountingOrder {
      __typename
      ...AccountingOrderInfo
    }
    activationStatus {
      __typename
      ...KeyValueInfo
    }
    activationStatusReason
    billToCustomer @skip(if: $useCustomerV2) {
      __typename
      code
      id
      name
    }
    billToCustomerV2 @include(if: $useCustomerV2) {
      __typename
      code
      id
      name
    }
    braceCount
    braceTypes {
      __typename
      option {
        __typename
        ...KeyValueInfo
      }
    }
    businessUnit
    cargoInsuranceV2 {
      __typename
      ...CurrencyInfoV2
    }
    code
    commodities {
      __typename
      ...CommodityInfoV2
    }
    customer @skip(if: $useCustomerV2) {
      __typename
      ...LoadOrderCustomerInfo
    }
    customerV2 @include(if: $useCustomerV2) {
      __typename
      ...LoadOrderCustomerInfoV2
    }
    declinedBy @skip(if: $useEmployeeV2) {
      __typename
      ...EmployeeSimple
    }
    declinedByV2 @include(if: $useEmployeeV2) {
      __typename
      ...EmployeeSimpleV2
    }
    declinedReason {
      __typename
      ...KeyValueInfo
    }
    dimensions {
      __typename
      ...CustomerOrderDimensionsInfo
    }
    division
    divisionV2
    id
    invoiceNote
    lifeCycleStatus
    load {
      __typename
      id
    }
    numberOfPallets
    orderNote
    orderedBy @skip(if: $useCustomerV2) {
      __typename
      contactTypeId
      id
      name
    }
    orderedByV2 @include(if: $useCustomerV2) {
      __typename
      contactTypeId
      id
      name
    }
    paymentTerms {
      __typename
      ...KeyValueInfo
    }
    priceTier {
      __typename
      ...KeyValueInfo
    }
    project
    projectV2
    quoteType {
      __typename
      ...KeyValueInfo
    }
    refs {
      __typename
      id
      type {
        __typename
        ...KeyValueInfo
      }
      value
    }
    relation {
      __typename
      ...KeyValueInfo
    }
    reps @skip(if: $useEmployeeV2) {
      __typename
      ...CustomerOrderRepInfo
    }
    repsV2 @include(if: $useEmployeeV2) {
      __typename
      ...CustomerOrderRepInfoV2
    }
    requirements {
      __typename
      option {
        __typename
        ...KeyValueInfo
      }
    }
    segmentCode
    serviceLevel {
      __typename
      description
      id
      name
    }
    shipments {
      __typename
      commodities {
        __typename
        description
        expectedWeightV2 {
          __typename
          unit
          value
        }
        id
      }
      id
      name
    }
    size {
      __typename
      ...KeyValueInfo
    }
    stops {
      __typename
      facility @skip(if: $useFacilityV2) {
        __typename
        ...LoadOrderStopFacilityInfo
      }
      facilityV2 @include(if: $useFacilityV2) {
        __typename
        ...LoadOrderStopFacilityInfoV2
      }
      id
      loadStopType
    }
    tarpCount
    tarpType
    tenderFrom @skip(if: $useCustomerV2) {
      __typename
      code
      id
      name
    }
    tenderFromV2 @include(if: $useCustomerV2) {
      __typename
      code
      id
      name
    }
    tenderStatus {
      __typename
      ...KeyValueInfo
    }
    totalDistance(unit: mi) {
      __typename
      unit
      value
    }
    trailerTypes {
      __typename
      ...KeyValueInfo
    }
    transportMode {
      __typename
      ...KeyValueInfo
    }
  }
  fragment CustomerOrderRepInfo on CustomerOrderRep {
    __typename
    employee {
      __typename
      ...EmployeeWithNameInfo
    }
    employeeGroup {
      __typename
      ...KeyValueInfo
    }
    employeeId
    employeeOffice {
      __typename
      ...KeyValueInfo
    }
    fullName
    id
    main
    type {
      __typename
      ...KeyValueInfo
    }
  }
  fragment CustomerOrderRepInfoV2 on CustomerOrderRepV2 {
    __typename
    employeeGroup {
      __typename
      ...KeyValueInfo
    }
    employeeId
    employeeOffice {
      __typename
      ...KeyValueInfo
    }
    employeeV2 {
      __typename
      ...EmployeeWithNameInfoV2
    }
    fullName
    id
    main
    type {
      __typename
      ...KeyValueInfo
    }
  }
  fragment CustomerSettingInfo on CustomerSetting {
    __typename
    defaultTrailerLength {
      __typename
      asRoundedFeet
    }
    doNotPostLoads
    id
    trailerTypes {
      __typename
      ...KeyValueInfo
    }
  }
  fragment CustomerSettingInfoV2 on CustomerSettingV2 {
    __typename
    defaultTrailerLength {
      __typename
      asRoundedFeet
    }
    doNotPostLoads
    id
    trailerTypes {
      __typename
      ...KeyValueInfo
    }
  }
  fragment DatetimeWithTimezoneInfo on DatetimeWithTimezone {
    __typename
    timezone
    value
  }
  fragment EmployeeGroupsInfoV2 on EmployeeV2 {
    __typename
    employeeGroups {
      __typename
      ...KeyValueInfo
    }
  }
  fragment EmployeeInfo on Employee {
    __typename
    companyEmail
    division {
      __typename
      ...KeyValueInfo
    }
    divisionId
    email
    emergencyContact
    emergencyPhone
    employeeCompanyLevelId
    employeeDepartmentId
    employeeDepartmentLevelId
    employeeDisplayName
    employeeGenderId
    employeeGroup {
      __typename
      ...KeyValueInfo
    }
    employeeGroupId
    employeeId
    employeeOffice {
      __typename
      ...KeyValueInfo
    }
    employeeOfficeId
    employeeRoleId
    employeeShirtSizeId
    employeeStatus {
      __typename
      active
      id
    }
    employeeSuffixId
    employeeTimeId
    employeeTypeId
    ext
    firstName
    firstNameDotLastName
    fullName
    hireDate
    id
    lastName
    manager {
      __typename
      ...EmployeeSimple
    }
    managerId
    middleName
    mobilePhone
    nickname
    personalEmail
    phoneNumber
    relationship
    slackName
    subRegion
    termDate
    title
    userId
  }
  fragment EmployeeInfoV2 on EmployeeV2 {
    __typename
    businessUnit {
      __typename
      active
      id
      name
    }
    businessUnitId
    companyEmail
    division {
      __typename
      ...KeyValueInfo
    }
    divisionId
    email
    emergencyContact
    emergencyPhone
    employeeCompanyLevelId
    employeeDepartmentId
    employeeDepartmentLevelId
    employeeDisplayName
    employeeGenderId
    employeeGroup {
      __typename
      ...KeyValueInfo
    }
    employeeGroupId
    employeeId
    employeeOffice {
      __typename
      ...KeyValueInfo
    }
    employeeOfficeId
    employeeRoleId
    employeeShirtSizeId
    employeeStatus {
      __typename
      active
      id
    }
    employeeSuffixId
    employeeTimeId
    employeeTypeId
    ext
    firstName
    firstNameDotLastName
    fullName
    hireDate
    id
    lastName
    manager {
      __typename
      ...EmployeeSimpleV2
    }
    managerId
    middleName
    mobilePhone
    nickname
    personalEmail
    phoneNumber
    project {
      __typename
      active
      id
      name
    }
    projectId
    relationship
    slackName
    subRegion
    termDate
    title
    userId
  }
  fragment EmployeeSimple on Employee {
    __typename
    companyEmail
    email
    emergencyContact
    emergencyPhone
    employeeDepartmentId
    employeeDisplayName
    employeeGenderId
    employeeGroupId
    employeeId
    employeeOfficeId
    employeeSuffixId
    ext
    firstName
    fullName
    id
    lastName
    managerId
    middleName
    nickname
    personalEmail
    phoneNumber
    relationship
    title
    userId
  }
  fragment EmployeeSimpleV2 on EmployeeV2 {
    __typename
    companyEmail
    email
    emergencyContact
    emergencyPhone
    employeeDepartmentId
    employeeDisplayName
    employeeGenderId
    employeeGroupId
    employeeId
    employeeOfficeId
    employeeSuffixId
    ext
    firstName
    fullName
    id
    lastName
    managerId
    middleName
    nickname
    personalEmail
    phoneNumber
    relationship
    title
    userId
  }
  fragment EmployeeWithNameInfo on Employee {
    __typename
    firstName
    fullName
    id
    lastName
    userId
  }
  fragment EmployeeWithNameInfoV2 on EmployeeV2 {
    __typename
    firstName
    id
    lastName
    userId
  }
  fragment FacilityAddressBrief on FacilityAddress {
    __typename
    addressType {
      __typename
      ...KeyValueInfo
    }
    addressTypeId
    addressTypes {
      __typename
      id
    }
    city
    country
    geopoint {
      __typename
      lat
      lon
    }
    id
    isVerified
    main
    postalCode
    riskInfoSource
    state
    street1
    street2
    thirdPartyId
  }
  fragment FacilityContactInfo on FacilityContact {
    __typename
    chatType {
      __typename
      ...KeyValueInfo
    }
    chatTypeId
    chatUsername
    contactTypeId
    emailAddress
    extension
    faxNumber
    id
    main
    main
    name
    phoneNumber
    riskInfoSource
    thirdPartyId
  }
  fragment FacilityNoteInfo on FacilityNote {
    __typename
    createdAt
    id
    noteType
    noteableId
    noteableType
    text
    updatedAt
  }
  fragment FreightAssignmentRegionInfo on FreightAssignmentRegion {
    __typename
    region
    subRegion
    superRegion
  }
  fragment KeyValueInfo on KeyValue {
    __typename
    active
    id
    metadataJson
    name
  }
  fragment LoadOrderCustomerInfo on Customer {
    __typename
    accountingNotes {
      __typename
      id
      noteType
      text
    }
    accountsReceivableOverdue
    addresses {
      __typename
      ...AddressBrief
    }
    availableCredit
    billingAddress {
      __typename
      id
    }
    billingEmail
    code
    contacts {
      __typename
      contactTypeId
      id
      name
    }
    creditStatus
    currencyId
    customerStatusType {
      __typename
      ...KeyValueInfo
    }
    electronicTracking
    id
    insuranceCargo
    invoiceDistributionMethodId
    loadDefaults {
      __typename
      disableAutoPost
      doNotPostLoads
    }
    name
    noteDefaults {
      __typename
      rateConfirmNote
    }
    parent {
      __typename
      code
      creditStatus
      id
      name
    }
    reps {
      __typename
      employee {
        __typename
        employeeGroup {
          __typename
          ...KeyValueInfo
        }
        employeeOffice {
          __typename
          ...KeyValueInfo
        }
        ...EmployeeWithNameInfo
      }
      id
      isLoadRep
      main
      repType {
        __typename
        ...KeyValueInfo
      }
    }
    settings {
      __typename
      ...CustomerSettingInfo
    }
    useParentCredit
  }
  fragment LoadOrderCustomerInfoV2 on CustomerV2 {
    __typename
    accountingNotes {
      __typename
      id
      noteType
      text
    }
    accountsReceivableOverdue
    addresses {
      __typename
      ...CustomerAddressBriefV2
    }
    availableCredit
    billingAddress {
      __typename
      id
    }
    billingEmail
    code
    contacts {
      __typename
      contactTypeId
      id
      name
    }
    creditStatus
    currencyId
    customerStatusType {
      __typename
      ...KeyValueInfo
    }
    electronicTracking
    id
    insuranceCargo
    invoiceDistributionMethodId
    loadDefaults {
      __typename
      disableAutoPost
      doNotPostLoads
    }
    name
    noteDefaults {
      __typename
      rateConfirmNote
    }
    parent {
      __typename
      code
      creditStatus
      id
      name
    }
    reps {
      __typename
      employee {
        __typename
        employeeGroup {
          __typename
          ...KeyValueInfo
        }
        employeeOffice {
          __typename
          ...KeyValueInfo
        }
        ...EmployeeWithNameInfoV2
      }
      id
      isLoadRep
      main
      repType {
        __typename
        ...KeyValueInfo
      }
    }
    settings {
      __typename
      ...CustomerSettingInfoV2
    }
    useParentCredit
  }
  fragment LoadOrderStopFacilityInfo on Facility {
    __typename
    code
    id
    mainAddress {
      __typename
      ...AddressBrief
    }
    name
  }
  fragment LoadOrderStopFacilityInfoV2 on FacilityV2 {
    __typename
    code
    id
    mainAddress {
      __typename
      ...FacilityAddressBrief
    }
    name
  }
  fragment LoadRouteInfoV2 on LoadRouteV2 {
    __typename
    currentStop {
      __typename
      ...RouteStopForStopEventsGrid
    }
    firstStop {
      __typename
      address {
        __typename
        city
        id
        state
      }
      availableEnd {
        __typename
        timezone
        value
      }
      availableStart {
        __typename
        timezone
        value
      }
      id
      subRegion {
        __typename
        name
        urn
      }
    }
    lastStop {
      __typename
      address {
        __typename
        city
        id
        state
      }
      availableEnd {
        __typename
        timezone
        value
      }
      availableStart {
        __typename
        timezone
        value
      }
      id
      subRegion {
        __typename
        name
        urn
      }
    }
    nextStop {
      __typename
      ...RouteStopForStopEventsGrid
    }
    stops {
      __typename
      ...LoadRouteStopInfo
    }
    stopsV2 @include(if: $useCityStateStop) {
      __typename
      ...LoadRouteStopInfoV2
    }
    ...LoadRouteSlimRouteV2
  }
  fragment LoadRouteSlimRouteV2 on LoadRouteV2 {
    __typename
    activationStatus {
      __typename
      ...KeyValueInfo
    }
    activationStatusReason
    activeRouteVendors {
      __typename
      ...RouteVendorInfoV2
    }
    braceCount
    braceTypes {
      __typename
      option {
        __typename
        ...KeyValueInfo
      }
    }
    businessUnit
    cargoInsuranceV2 {
      __typename
      ...CurrencyInfoV2
    }
    code
    dimensions {
      __typename
      ...RouteDimensionsInfo
    }
    division
    divisionV2
    expectedMaxWeight(unit: lbs) {
      __typename
      unit
      value
    }
    freightAssignmentInboundRegion
    freightAssignmentOutboundRegion
    hotRoute
    id
    inboundRegion {
      __typename
      ...RegionInfo
    }
    lifeCycleStatus
    maxCost {
      __typename
      ...RouteMaxCostInfo
    }
    outboundRegion {
      __typename
      ...RegionInfo
    }
    postings {
      __typename
      active
      id
      postedRate {
        __typename
        value
      }
    }
    projectV2
    requirements {
      __typename
      option {
        __typename
        ...KeyValueInfo
      }
    }
    routeType
    routeVendors {
      __typename
      ...RouteVendorInfoV2
    }
    segmentCode
    sequence
    size {
      __typename
      ...KeyValueInfo
    }
    tarpCount
    tarpType
    totalDistance(unit: mi) {
      __typename
      unit
      value
    }
    trailerTypes {
      __typename
      ...KeyValueInfo
    }
    transportMode {
      __typename
      ...KeyValueInfo
    }
  }
  fragment LoadRouteStopFacilityInfo on Facility {
    __typename
    addresses {
      __typename
      ...AddressBrief
    }
    code
    contacts {
      __typename
      ...ContactInfo
    }
    customerFacilities @include(if: $useCustomerLoadDefaults) {
      __typename
      customerId
      drop
      facilityId
      id
      isAutoScheduleDefault
      isAutoScheduleEligible
      schedulingSystem
    }
    externalNotes {
      __typename
      ...NoteInfo
    }
    facilityLoadDefaults @include(if: $useCustomerLoadDefaults) {
      __typename
      autoSchedDefault
      autoSchedEligible
      facilityId
      id
      schedSystem
    }
    facilityNote
    id
    loadFromType {
      __typename
      ...KeyValueInfo
    }
    mainAddress {
      __typename
      ...AddressBrief
    }
    name
    phoneNumber
    schedules {
      __typename
      ...ScheduleInfo
    }
    schedulingContact
    schedulingSystemType {
      __typename
      ...KeyValueInfo
    }
    status
    timezone
    unloadFromType {
      __typename
      ...KeyValueInfo
    }
  }
  fragment LoadRouteStopFacilityInfoV2 on FacilityV2 {
    __typename
    addresses {
      __typename
      ...FacilityAddressBrief
    }
    code
    contacts {
      __typename
      ...FacilityContactInfo
    }
    customerFacilities @include(if: $useCustomerLoadDefaults) {
      __typename
      customerId
      drop
      facilityId
      id
      isAutoScheduleDefault
      isAutoScheduleEligible
      schedulingSystem
    }
    externalNotes {
      __typename
      ...FacilityNoteInfo
    }
    facilityLoadDefaults @include(if: $useCustomerLoadDefaults) {
      __typename
      autoSchedDefault
      autoSchedEligible
      facilityId
      id
      schedSystem
    }
    facilityNote
    id
    loadFromType {
      __typename
      ...KeyValueInfo
    }
    mainAddress {
      __typename
      ...FacilityAddressBrief
    }
    name
    phoneNumber
    schedules {
      __typename
      ...ScheduleInfoV2
    }
    schedulingContact
    schedulingSystemType {
      __typename
      ...KeyValueInfo
    }
    status
    timezone
    unloadFromType {
      __typename
      ...KeyValueInfo
    }
  }
  fragment LoadRouteStopInfo on RouteStop {
    __typename
    address {
      __typename
      ...StopAddressInfo
    }
    appointment {
      __typename
      ...AppointmentV2Info
    }
    appointments {
      __typename
      ...AppointmentV2Info
    }
    apptConfBy
    apptReqWith
    availableEnd {
      __typename
      ...DatetimeWithTimezoneInfo
    }
    availableEndTimes {
      __typename
      ...StopRange
    }
    availableStart {
      __typename
      ...DatetimeWithTimezoneInfo
    }
    availableStartTimes {
      __typename
      ...StopRange
    }
    bolNumber
    commodities {
      __typename
      ...CommodityInfoV2
    }
    computedCurrentAppointment {
      __typename
      ...AppointmentV2ForCCAInfo
    }
    distanceToNext(unit: mi) {
      __typename
      unit
      value
    }
    facility @skip(if: $useFacilityV2) {
      __typename
      ...LoadRouteStopFacilityInfo
    }
    facilityV2 @include(if: $useFacilityV2) {
      __typename
      ...LoadRouteStopFacilityInfoV2
    }
    freightAssignmentRegion {
      __typename
      ...FreightAssignmentRegionInfo
    }
    id
    isOrderStop
    liveType
    loadFrom {
      __typename
      ...KeyValueInfo
    }
    loadStopType
    note
    numberOfPallets
    orderStopId
    refs {
      __typename
      id
      type {
        __typename
        ...KeyValueInfo
      }
      value
    }
    reqDate {
      __typename
      ...DatetimeWithTimezoneInfo
    }
    requirements {
      __typename
      option {
        __typename
        ...KeyValueInfo
      }
    }
    scheduleType
    schedulingLog {
      __typename
      ...SchedulingLogInfo
    }
    sealNumber
    stopEventsV2 {
      __typename
      eventSubTypeDatetime
      eventSubTypeID
      eventSubTypeTimezone
      eventTypeID
      id
    }
    trackingAutoETADatetime
    trackingAutoETAUsesDataScienceFormula
    trackingManualETADatetime
    type
    unloadFrom {
      __typename
      ...KeyValueInfo
    }
    workType
  }
  fragment LoadRouteStopInfoV2 on RouteStopV2 {
    __typename
    address {
      __typename
      ...StopAddressInfoV2
    }
    appointment {
      __typename
      ...AppointmentV2Info
    }
    appointments {
      __typename
      ...AppointmentV2Info
    }
    apptConfBy
    apptReqWith
    availableEnd {
      __typename
      ...DatetimeWithTimezoneInfo
    }
    availableEndTimes {
      __typename
      ...StopRange
    }
    availableStart {
      __typename
      ...DatetimeWithTimezoneInfo
    }
    availableStartTimes {
      __typename
      ...StopRange
    }
    bolNumber
    commodities {
      __typename
      ...CommodityInfoV2
    }
    computedCurrentAppointment {
      __typename
      ...AppointmentV2ForCCAInfo
    }
    distanceToNext(unit: mi) {
      __typename
      unit
      value
    }
    facility @skip(if: $useFacilityV2) {
      __typename
      ...LoadRouteStopFacilityInfo
    }
    facilityV2 @include(if: $useFacilityV2) {
      __typename
      ...LoadRouteStopFacilityInfoV2
    }
    freightAssignmentRegion {
      __typename
      ...FreightAssignmentRegionInfo
    }
    id
    isOrderStop
    liveType
    loadFrom {
      __typename
      ...KeyValueInfo
    }
    loadStopType
    note
    numberOfPallets
    orderStopId
    refs {
      __typename
      id
      type {
        __typename
        ...KeyValueInfo
      }
      value
    }
    reqDate {
      __typename
      ...DatetimeWithTimezoneInfo
    }
    requirements {
      __typename
      option {
        __typename
        ...KeyValueInfo
      }
    }
    scheduleType
    schedulingLog {
      __typename
      ...SchedulingLogInfo
    }
    sealNumber
    stopEventsV2 {
      __typename
      eventSubTypeDatetime
      eventSubTypeID
      eventSubTypeTimezone
      eventTypeID
      id
    }
    type
    unloadFrom {
      __typename
      ...KeyValueInfo
    }
    workType
  }
  fragment LoadStopInfo on LoadStop {
    __typename
    id
    loadId
    orderStopIds
    routeStopIds
    sequence
  }
  fragment NewLoadInfoV2 on LoadV2 {
    __typename
    code
    createdAt
    id
    note
    orders {
      __typename
      ...CustomerOrderInfoV2
    }
    routes {
      __typename
      ...LoadRouteInfoV2
    }
    status
    stops {
      __typename
      ...LoadStopInfo
    }
  }
  fragment NoteInfo on Note {
    __typename
    createdAt
    id
    noteType
    noteableId
    noteableType
    text
    updatedAt
  }
  fragment RegionInfo on Region {
    __typename
    name
    parenturn
    type
    urn
    urn
  }
  fragment RepInfo on Rep {
    __typename
    employee {
      __typename
      ...EmployeeInfo
    }
    id
    isLoadRep
    main
    repType
  }
  fragment RepInfoV2 on RepV2 {
    __typename
    active
    businessUnitId
    directionId
    divisionId
    employee {
      __typename
      ...EmployeeGroupsInfoV2
      ...EmployeeInfoV2
    }
    id
    isLoadRep
    main
    modeId
    repType
    repTypeKeyId
    sizeId
  }
  fragment RouteDimensionsInfo on RouteDimensions {
    __typename
    height(unit: in) {
      __typename
      unit
      value
    }
    length(unit: ft) {
      __typename
      unit
      value
    }
    width(unit: in) {
      __typename
      unit
      value
    }
  }
  fragment RouteMaxCostInfo on RouteMaxCostType {
    __typename
    loadId
    maxCost
    overMax
    routeId
  }
  fragment RouteStopForStopEventsGrid on RouteStop {
    __typename
    computedCurrentAppointment {
      __typename
      requestedEnd {
        __typename
        timezone
        value
      }
      requestedStart {
        __typename
        timezone
        value
      }
      requestedTimeRange {
        __typename
        endOffsetMs
        startOffsetMs
      }
    }
    id
  }
  fragment RouteVendorInfoV2 on RouteVendorV2 {
    __typename
    bookedBy {
      __typename
      ...EmployeeSimple
    }
    bookedWith {
      __typename
      ...ContactInfo
    }
    bookingNotes
    bounced
    bounces {
      __typename
      ...BounceInfoV2
    }
    bracingType
    createdBy {
      __typename
      ...EmployeeSimple
    }
    distance {
      __typename
      asRoundedMiles
    }
    expectedEmptyGeography {
      __typename
      id
      name
      sourceId
      state
      timezone
    }
    id
    numberOfBraces
    numberOfPallets
    numberOfTarps
    palletType
    routeVendorCost {
      __typename
      disableFinancials
      isVoucherRequirementBypassed
      routeId
      totalCost
      vendorId
    }
    routeVendorReferences {
      __typename
      id
      routeVendorReferenceType
      routeVendorReferenceTypeV2
      value
    }
    routeVendorReps {
      __typename
      ...RouteVendorRepInfoV2
    }
    tarpType
    trailerHeight {
      __typename
      asInches
      asRoundedInches
    }
    trailerHeightV2(unit: in) {
      __typename
      unit
      value
    }
    trailerLength {
      __typename
      asFeet
      asRoundedFeet
    }
    trailerLengthV2(unit: ft) {
      __typename
      unit
      value
    }
    trailerType {
      __typename
      ...KeyValueInfo
    }
    trailerWidth {
      __typename
      asInches
      asRoundedInches
    }
    trailerWidthV2(unit: in) {
      __typename
      unit
      value
    }
    utcExpectedEmptyDatetime
    utcPickupEtaDatetime
    vendor @skip(if: $useCarrierV2) {
      __typename
      ...CarrierInfo
    }
    vendorType
    vendorV2 @include(if: $useCarrierV2) {
      __typename
      ...CarrierInfoV2
    }
    ...BookingSource
  }
  fragment RouteVendorRepInfoV2 on RouteVendorRepV2 {
    __typename
    createdByUser @skip(if: $useEmployeeV2) {
      __typename
      email
      employee {
        __typename
        ...EmployeeSimple
      }
      id
    }
    createdByUserV2 @include(if: $useEmployeeV2) {
      __typename
      email
      employee {
        __typename
        ...EmployeeSimpleV2
      }
    }
    employee @skip(if: $useEmployeeV2) {
      __typename
      employeeGroup {
        __typename
        ...KeyValueInfo
      }
      employeeOffice {
        __typename
        ...KeyValueInfo
      }
      ...EmployeeSimple
    }
    employeeV2 @include(if: $useEmployeeV2) {
      __typename
      employeeGroup {
        __typename
        ...KeyValueInfo
      }
      employeeOffice {
        __typename
        ...KeyValueInfo
      }
      ...EmployeeSimpleV2
    }
    id
    main
    repType
    updatedByUser @skip(if: $useEmployeeV2) {
      __typename
      email
      employee {
        __typename
        ...EmployeeSimple
      }
      id
    }
    updatedByUserV2 @include(if: $useEmployeeV2) {
      __typename
      email
      employee {
        __typename
        ...EmployeeSimpleV2
      }
      id
    }
  }
  fragment ScheduleEntryInfo on ScheduleEntry {
    __typename
    closed
    hours {
      __typename
      ...ScheduleRangeInfo
    }
    id
  }
  fragment ScheduleEntryInfoV2 on ScheduleEntryV2 {
    __typename
    closed
    hours {
      __typename
      ...ScheduleRangeInfoV2
    }
    id
  }
  fragment ScheduleInfo on Schedule {
    __typename
    appointmentType
    dropType
    friday {
      __typename
      ...ScheduleEntryInfo
    }
    id
    loadSize {
      __typename
      ...KeyValueInfo
    }
    loadSizeId
    modeType
    monday {
      __typename
      ...ScheduleEntryInfo
    }
    routeTransportMode {
      __typename
      ...KeyValueInfo
    }
    routeTransportModeId
    saturday {
      __typename
      ...ScheduleEntryInfo
    }
    scheduleTypeNullable
    serviceType
    sunday {
      __typename
      ...ScheduleEntryInfo
    }
    thursday {
      __typename
      ...ScheduleEntryInfo
    }
    trailerTypeIdNullable
    trailerTypeNullable {
      __typename
      ...KeyValueInfo
    }
    tuesday {
      __typename
      ...ScheduleEntryInfo
    }
    wednesday {
      __typename
      ...ScheduleEntryInfo
    }
    workType
  }
  fragment ScheduleInfoV2 on ScheduleV2 {
    __typename
    appointmentType
    dropType
    friday {
      __typename
      ...ScheduleEntryInfoV2
    }
    id
    loadSize {
      __typename
      ...KeyValueInfo
    }
    loadSizeId
    modeType
    monday {
      __typename
      ...ScheduleEntryInfoV2
    }
    routeTransportMode {
      __typename
      ...KeyValueInfo
    }
    routeTransportModeId
    saturday {
      __typename
      ...ScheduleEntryInfoV2
    }
    scheduleType
    scheduleTypeNullable
    serviceType
    serviceType
    sunday {
      __typename
      ...ScheduleEntryInfoV2
    }
    thursday {
      __typename
      ...ScheduleEntryInfoV2
    }
    trailerType {
      __typename
      ...KeyValueInfo
    }
    trailerTypeId
    trailerTypeIdNullable
    trailerTypeNullable {
      __typename
      ...KeyValueInfo
    }
    tuesday {
      __typename
      ...ScheduleEntryInfoV2
    }
    wednesday {
      __typename
      ...ScheduleEntryInfoV2
    }
    workType
  }
  fragment ScheduleRangeInfo on ScheduleRange {
    __typename
    endOffsetMs
    id
    startOffsetMs
  }
  fragment ScheduleRangeInfoV2 on ScheduleRangeV2 {
    __typename
    endOffsetMs
    id
    startOffsetMs
  }
  fragment SchedulingLogInfo on SchedulingLog {
    __typename
    category
    changedBy @skip(if: $useEmployeeV2) {
      __typename
      employeeDisplayName
      id
    }
    changedByV2 @include(if: $useEmployeeV2) {
      __typename
      employeeDisplayName
      id
    }
    createdAt
    endDate {
      __typename
      timezone
      value
    }
    id
    reason
    scheduleReason
    startDate {
      __typename
      timezone
      value
    }
    timeRange {
      __typename
      endOffsetMs
      id
      startOffsetMs
    }
    type
  }
  fragment StopAddressInfo on StopAddress {
    __typename
    city
    country
    geopoint {
      __typename
      lat
      lon
    }
    id
    postalCode
    state
    street1
    street2
  }
  fragment StopAddressInfoV2 on StopAddressV2 {
    __typename
    city
    country
    geopoint {
      __typename
      lat
      lon
    }
    id
    postalCode
    state
    street1
    street2
  }
  fragment StopRange on ScheduleRange {
    __typename
    endOffsetMs
    id
    startOffsetMs
  }
  query getLoadV2($id: ID!, $useCarrierV2: Boolean! = false, $useCityStateStop: Boolean! = false, $useCustomerLoadDefaults: Boolean! = false, $useCustomerV2: Boolean! = false, $useEmployeeV2: Boolean! = false, $useFacilityV2: Boolean! = false) {
    loadV2(id: $id) {
      __typename
      ...NewLoadInfoV2
    }
  }`

export const getLoadQuery2 = `fragment AccountingOrderInfo on Order {
  __typename
  id
  isInvoiceRequirementBypassed
  taxExempt
}
fragment AddressBrief on Address {
  __typename
  addressType {
    __typename
    ...KeyValueInfo
  }
  addressTypeId
  addressableId
  addressableType
  city
  country
  geopoint {
    __typename
    lat
    lon
  }
  id
  isVerified
  main
  postalCode
  riskInfoSource
  state
  street1
  street2
  thirdPartyId
}
fragment AppointmentV2ForCCAInfo on AppointmentV2 {
  __typename
  confirmed
  id
  requestedEnd {
    __typename
    timezone
    value
  }
  requestedStart {
    __typename
    timezone
    value
  }
  requestedTimeRange {
    __typename
    endOffsetMs
    id
    startOffsetMs
  }
  status
}
fragment AppointmentV2Info on AppointmentV2 {
  __typename
  autoSchedule
  changedBy @skip(if: $useEmployeeV2) {
    __typename
    employeeDisplayName
    id
  }
  changedByV2 @include(if: $useEmployeeV2) {
    __typename
    employeeDisplayName
    id
  }
  confirmed
  createdAt
  id
  requestedEnd {
    __typename
    timezone
    value
  }
  requestedStart {
    __typename
    timezone
    value
  }
  requestedTimeRange {
    __typename
    endOffsetMs
    id
    startOffsetMs
  }
  status
  updatedAt
}
fragment BookingSource on RouteVendorV2 {
  __typename
  bookingSource {
    __typename
    id
    name
  }
}
fragment BounceInfoV2 on BounceV2 {
  __typename
  active
  bounceReason {
    __typename
    active
    description
    id
    name
  }
  bounceType {
    __typename
    active
    description
    id
    name
  }
  createdAt
  createdByUser {
    __typename
    employee {
      __typename
      ...EmployeeSimple
    }
    id
  }
  id
  notes
  rebooked
  rebookedAt
  rebookedByUser {
    __typename
    employee {
      __typename
      ...EmployeeSimple
    }
    id
  }
  routeVendor {
    __typename
    id
    routeVendorCost {
      __typename
      totalCost
    }
    vendor {
      __typename
      id
      name
    }
    vendorType
  }
}
fragment CarrierAddressBrief on CarrierAddress {
  __typename
  addressType {
    __typename
    ...KeyValueInfo
  }
  addressTypeId
  carrierId
  city
  country
  createdAt
  geopoint {
    __typename
    lat
    lon
  }
  id
  isVerified
  main
  postalCode
  riskInfoSource
  state
  street1
  street2
  thirdPartyId
  updatedAt
}
fragment CarrierContactInfo on CarrierContact {
  __typename
  chatType {
    __typename
    ...KeyValueInfo
  }
  chatTypeId
  chatUsername
  contactTypeId
  emailAddress
  extension
  faxNumber
  id
  main
  main
  name
  phoneNumber
  riskInfoSource
  thirdPartyId
}
fragment CarrierCustomerRelationshipInfo on CarrierCustomerRelationship {
  __typename
  active
  bypassCompliance
  canLoad
  carrier {
    __typename
    code
    id
    name
  }
  createdAt
  createdBy {
    __typename
    employee {
      __typename
      firstName
      id
      lastName
    }
  }
  customer {
    __typename
    id
    name
  }
  id
  notes {
    __typename
    id
    noteType
    text
  }
  relationshipType
  updatedAt
  updatedBy {
    __typename
    employee {
      __typename
      firstName
      id
      lastName
    }
  }
}
fragment CarrierCustomerRelationshipInfoV2 on CarrierCustomerRelationshipV2 {
  __typename
  active
  bypassCompliance
  canLoad
  carrier {
    __typename
    code
    id
    name
  }
  createdAt
  createdBy {
    __typename
    employee {
      __typename
      firstName
      id
      lastName
    }
  }
  customer {
    __typename
    id
    name
  }
  id
  notes {
    __typename
    id
    noteType
    text
  }
  relationshipType
  updatedAt
  updatedBy {
    __typename
    employee {
      __typename
      firstName
      id
      lastName
    }
  }
}
fragment CarrierElectronictrackingInfo on CarrierElectronicTracking {
  __typename
  electronicTrackingMethod {
    __typename
    id
    name
  }
  electronicTrackingMethodId
  electronicTrackingType {
    __typename
    id
    name
  }
  electronicTrackingTypeId
  id
  priority
}
fragment CarrierGroupInfo on CarrierGroup {
  __typename
  carrierId
  employeeDivision {
    __typename
    ...KeyValueInfo
  }
  employeeDivisionId
  employeeGroup {
    __typename
    ...KeyValueInfo
  }
  employeeGroupId
  groupType {
    __typename
    ...KeyValueInfo
  }
  groupTypeId
  id
}
fragment CarrierIdentifierInfo on CarrierIdentifier {
  __typename
  carrierIdentifierTypeId
  code
  id
  link
}
fragment CarrierIdentifierInfoV2 on CarrierIdentifierV2 {
  __typename
  carrierIdentifierTypeId
  code
  id
  link
}
fragment CarrierInfo on Carrier {
  __typename
  accountingNotes {
    __typename
    ...NoteInfo
  }
  accountingStatus
  addresses {
    __typename
    ...AddressBrief
  }
  carrierIdentifiers {
    __typename
    ...CarrierIdentifierInfo
  }
  carrierPaymentTermId
  code
  confirmationNotes {
    __typename
    ...NoteInfo
  }
  contacts {
    __typename
    ...ContactInfo
  }
  currencyId
  customerRelationships {
    __typename
    ...CarrierCustomerRelationshipInfo
  }
  dbaName
  descendantIds
  dotNumber
  dunsNumber
  electronicTrackingMethod {
    __typename
    ...KeyValueInfo
  }
  electronicTrackingType {
    __typename
    ...KeyValueInfo
  }
  entityType
  externalStatus
  id
  insurances {
    __typename
    ...CarrierInsuranceInfo
  }
  invoiceDistributionMethodId
  mainAddress {
    __typename
    ...AddressBrief
  }
  manualTrackingInformation
  manualTrackingMethod
  mcNumber
  name
  notes
  operatingStatus
  parent {
    __typename
    code
    id
    name
  }
  paymentMethodId
  phoneNumber
  remitToCarrier {
    __typename
    code
    id
    name
  }
  remittanceAddress {
    __typename
    id
  }
  remittanceEmail
  remittanceGrouping
  reps {
    __typename
    ...RepInfo
  }
  safetyRating
  scacNumber
  standing {
    __typename
    ...CarrierStandingInfo
  }
  status
}
fragment CarrierInfoV2 on CarrierV2 {
  __typename
  accountingNotes {
    __typename
    ...CarrierNoteInfo
  }
  accountingStatus
  addresses {
    __typename
    ...CarrierAddressBrief
  }
  audits {
    __typename
    ... on CarrierRepAuditV2 {
      __typename
      actionType
      auditableRep {
        __typename
        employee {
          __typename
          employeeDisplayName
          fullName
          id
        }
      }
      createdAt
      createdByEmployee {
        __typename
        employeeDisplayName
        id
      }
      currentValue {
        __typename
        employeeId
        main
        repType
      }
      id
      previousValue {
        __typename
        employeeId
        main
        repType
      }
    }
  }
  carrierIdentifiers {
    __typename
    ...CarrierIdentifierInfoV2
  }
  carrierPaymentTermId
  code
  complianceEmail
  confirmationNotes {
    __typename
    ...CarrierNoteInfo
  }
  contacts {
    __typename
    ...CarrierContactInfo
  }
  currencyId
  customerRelationships {
    __typename
    ...CarrierCustomerRelationshipInfoV2
  }
  dbaName
  descendantIds
  dotNumber
  dunsNumber
  electronicTrackingMethod {
    __typename
    ...KeyValueInfo
  }
  electronicTrackingType {
    __typename
    ...KeyValueInfo
  }
  electronicTrackings {
    __typename
    ...CarrierElectronictrackingInfo
  }
  entityType
  externalStatus
  groups {
    __typename
    ...CarrierGroupInfo
  }
  id
  insurances {
    __typename
    ...CarrierInsuranceInfoV2
  }
  invoiceDistributionMethodId
  mainAddress {
    __typename
    ...CarrierAddressBrief
  }
  manualTrackingInformation
  manualTrackingMethod
  mcNumber
  name
  notes
  operatingStatus
  parent {
    __typename
    code
    id
    name
  }
  paymentMethodId
  phoneNumber
  remitToCarrier {
    __typename
    code
    id
    name
  }
  remittanceAddress {
    __typename
    id
  }
  remittanceEmail
  remittanceGrouping
  reps {
    __typename
    ...RepInfoV2
  }
  roeStatus
  safetyRating
  scacNumber
  standing {
    __typename
    ...CarrierStandingInfoV2
  }
  status
  website
}
fragment CarrierInsuranceInfo on CarrierInsurance {
  __typename
  cancelDate
  carrierInsuranceTypeId
  effectiveDate
  exemptions
  expirationDate
  id
  identification
  insurer
  limit
  producer
  rmisCovgId
  underwriterRating
}
fragment CarrierInsuranceInfoV2 on CarrierInsuranceV2 {
  __typename
  cancelDate
  carrierInsuranceTypeId
  effectiveDate
  exemptions
  expirationDate
  id
  identification
  insurer
  limit
  producer
  rmisCovgId
  underwriterRating
}
fragment CarrierNoteInfo on CarrierNote {
  __typename
  carrierId
  createdAt
  id
  noteType
  text
  updatedAt
}
fragment CarrierStandingInfo on CarrierStanding {
  __typename
  notes
  reasonCodeId
  statusTypeId
  typeId
  updatedAt
  updatedByUser {
    __typename
    employee {
      __typename
      fullName
      id
    }
    id
  }
}
fragment CarrierStandingInfoV2 on CarrierStandingV2 {
  __typename
  notes
  reasonCodeId
  statusTypeId
  typeId
  updatedAt
  updatedByUser {
    __typename
    employee {
      __typename
      fullName
      id
    }
    id
  }
}
fragment CommodityInfoV2 on CommodityV2 {
  __typename
  actualClass {
    __typename
    ...KeyValueInfo
  }
  actualDensity {
    __typename
    unit
    value
  }
  actualDensityV2 {
    __typename
    unit
    value
  }
  actualDimensions {
    __typename
    height(unit: in) {
      __typename
      unit
      value
    }
    length(unit: in) {
      __typename
      unit
      value
    }
    width(unit: in) {
      __typename
      unit
      value
    }
  }
  actualDimensionsV2 {
    __typename
    height {
      __typename
      unit
      value
    }
    length {
      __typename
      unit
      value
    }
    width {
      __typename
      unit
      value
    }
  }
  actualLinear(unit: ft) {
    __typename
    unit
    value
  }
  actualLinearV2 {
    __typename
    unit
    value
  }
  actualNMFCCode
  actualPieces
  actualVolume(unit: ft3) {
    __typename
    unit
    value
  }
  actualVolumeV2 {
    __typename
    unit
    value
  }
  actualWeight(unit: lbs) {
    __typename
    unit
    value
  }
  actualWeightV2 {
    __typename
    unit
    value
  }
  bottomLoadable
  customerCode
  description
  doNotStack
  expectedClass {
    __typename
    ...KeyValueInfo
  }
  expectedDensity {
    __typename
    unit
    value
  }
  expectedDensityV2 {
    __typename
    unit
    value
  }
  expectedDimensions {
    __typename
    height(unit: in) {
      __typename
      unit
      value
    }
    length(unit: in) {
      __typename
      unit
      value
    }
    width(unit: in) {
      __typename
      unit
      value
    }
  }
  expectedDimensionsV2 {
    __typename
    height {
      __typename
      unit
      value
    }
    length {
      __typename
      unit
      value
    }
    width {
      __typename
      unit
      value
    }
  }
  expectedLinear(unit: ft) {
    __typename
    unit
    value
  }
  expectedLinearV2 {
    __typename
    unit
    value
  }
  expectedNMFCCode
  expectedPieces
  expectedVolume(unit: ft3) {
    __typename
    unit
    value
  }
  expectedVolumeV2 {
    __typename
    unit
    value
  }
  expectedWeight(unit: lbs) {
    __typename
    unit
    value
  }
  expectedWeightV2 {
    __typename
    unit
    value
  }
  hazmat
  hazmatClass {
    __typename
    ...KeyValueInfo
  }
  hazmatPackagingGroup
  hazmatPhoneNumber
  hazmatUnitedNationsNumber
  id
  loadOnType {
    __typename
    ...KeyValueInfo
  }
  make
  maximumTemperature {
    __typename
    unit
    value
  }
  maximumTemperatureV2 {
    __typename
    unit
    value
  }
  minimumTemperature {
    __typename
    unit
    value
  }
  minimumTemperatureV2 {
    __typename
    unit
    value
  }
  model
  orderId
  overDimensional
  packagingCount
  packagingType {
    __typename
    ...KeyValueInfo
  }
  pieceType {
    __typename
    ...KeyValueInfo
  }
  preCoolTo {
    __typename
    unit
    value
  }
  preCoolToV2 {
    __typename
    unit
    value
  }
  serialNumbers
  stccCode
  temperatureControlled
  temperatureSetting
  topLoadable
  year
}
fragment ContactInfo on Contact {
  __typename
  chatType {
    __typename
    ...KeyValueInfo
  }
  chatTypeId
  chatUsername
  contactTypeId
  emailAddress
  extension
  faxNumber
  id
  main
  main
  name
  phoneNumber
  riskInfoSource
  thirdPartyId
}
fragment CurrencyInfo on Currency {
  __typename
  unit
  value
}
fragment CustomerAddressBriefV2 on CustomerAddress {
  __typename
  addressType {
    __typename
    ...KeyValueInfo
  }
  addressTypeId
  addressableId
  addressableType
  city
  country
  geopoint {
    __typename
    lat
    lon
  }
  id
  isVerified
  main
  postalCode
  riskInfoSource
  state
  street1
  street2
  thirdPartyId
}
fragment CustomerOrderDimensionsInfo on CustomerOrderDimensions {
  __typename
  height(unit: in) {
    __typename
    unit
    value
  }
  length(unit: ft) {
    __typename
    unit
    value
  }
  width(unit: in) {
    __typename
    unit
    value
  }
}
fragment CustomerOrderInfoV2 on CustomerOrderV2 {
  __typename
  acceptedBy @skip(if: $useEmployeeV2) {
    __typename
    ...EmployeeSimple
  }
  acceptedByV2 @include(if: $useEmployeeV2) {
    __typename
    ...EmployeeSimpleV2
  }
  accountingOrder {
    __typename
    ...AccountingOrderInfo
  }
  activationStatus {
    __typename
    ...KeyValueInfo
  }
  activationStatusReason
  billToCustomer @skip(if: $useCustomerV2) {
    __typename
    code
    id
    name
  }
  billToCustomerV2 @include(if: $useCustomerV2) {
    __typename
    code
    id
    name
  }
  braceCount
  braceTypes {
    __typename
    option {
      __typename
      ...KeyValueInfo
    }
  }
  businessUnit
  cargoInsurance {
    __typename
    ...CurrencyInfo
  }
  code
  commodities {
    __typename
    ...CommodityInfoV2
  }
  customer @skip(if: $useCustomerV2) {
    __typename
    ...LoadOrderCustomerInfo
  }
  customerV2 @include(if: $useCustomerV2) {
    __typename
    ...LoadOrderCustomerInfoV2
  }
  declinedBy @skip(if: $useEmployeeV2) {
    __typename
    ...EmployeeSimple
  }
  declinedByV2 @include(if: $useEmployeeV2) {
    __typename
    ...EmployeeSimpleV2
  }
  declinedReason {
    __typename
    ...KeyValueInfo
  }
  dimensions {
    __typename
    ...CustomerOrderDimensionsInfo
  }
  division
  divisionV2
  id
  invoiceNote
  lifeCycleStatus
  load {
    __typename
    id
  }
  numberOfPallets
  orderNote
  orderedBy @skip(if: $useCustomerV2) {
    __typename
    contactTypeId
    id
    name
  }
  orderedByV2 @include(if: $useCustomerV2) {
    __typename
    contactTypeId
    id
    name
  }
  patterns {
    __typename
    ...PatternInfo
  }
  paymentTerms {
    __typename
    ...KeyValueInfo
  }
  priceTier {
    __typename
    ...KeyValueInfo
  }
  project
  projectV2
  quoteType {
    __typename
    ...KeyValueInfo
  }
  refs {
    __typename
    id
    type {
      __typename
      ...KeyValueInfo
    }
    value
  }
  relation {
    __typename
    ...KeyValueInfo
  }
  reps @skip(if: $useEmployeeV2) {
    __typename
    ...CustomerOrderRepInfo
  }
  repsV2 @include(if: $useEmployeeV2) {
    __typename
    ...CustomerOrderRepInfoV2
  }
  requirements {
    __typename
    option {
      __typename
      ...KeyValueInfo
    }
  }
  segmentCode
  serviceLevel {
    __typename
    description
    id
    name
  }
  size {
    __typename
    ...KeyValueInfo
  }
  stops {
    __typename
    facility @skip(if: $useFacilityV2) {
      __typename
      ...LoadOrderStopFacilityInfo
    }
    facilityV2 @include(if: $useFacilityV2) {
      __typename
      ...LoadOrderStopFacilityInfoV2
    }
    id
    loadStopType
  }
  tarpCount
  tarpType
  tenderFrom @skip(if: $useCustomerV2) {
    __typename
    code
    id
    name
  }
  tenderFromV2 @include(if: $useCustomerV2) {
    __typename
    code
    id
    name
  }
  tenderStatus {
    __typename
    ...KeyValueInfo
  }
  totalDistance(unit: mi) {
    __typename
    unit
    value
  }
  trailerTypes {
    __typename
    ...KeyValueInfo
  }
  transportMode {
    __typename
    ...KeyValueInfo
  }
}
fragment CustomerOrderRepInfo on CustomerOrderRep {
  __typename
  employee {
    __typename
    ...EmployeeWithNameInfo
  }
  employeeGroup {
    __typename
    ...KeyValueInfo
  }
  employeeId
  employeeOffice {
    __typename
    ...KeyValueInfo
  }
  fullName
  id
  main
  type {
    __typename
    ...KeyValueInfo
  }
}
fragment CustomerOrderRepInfoV2 on CustomerOrderRepV2 {
  __typename
  employeeGroup {
    __typename
    ...KeyValueInfo
  }
  employeeId
  employeeOffice {
    __typename
    ...KeyValueInfo
  }
  employeeV2 {
    __typename
    ...EmployeeWithNameInfoV2
  }
  fullName
  id
  main
  type {
    __typename
    ...KeyValueInfo
  }
}
fragment CustomerSettingInfo on CustomerSetting {
  __typename
  defaultTrailerLength {
    __typename
    asRoundedFeet
  }
  doNotPostLoads
  id
  trailerTypes {
    __typename
    ...KeyValueInfo
  }
}
fragment CustomerSettingInfoV2 on CustomerSettingV2 {
  __typename
  defaultTrailerLength {
    __typename
    asRoundedFeet
  }
  doNotPostLoads
  id
  trailerTypes {
    __typename
    ...KeyValueInfo
  }
}
fragment DatetimeWithTimezoneInfo on DatetimeWithTimezone {
  __typename
  timezone
  value
}
fragment EmployeeGroupsInfoV2 on EmployeeV2 {
  __typename
  employeeGroups {
    __typename
    ...KeyValueInfo
  }
}
fragment EmployeeInfo on Employee {
  __typename
  companyEmail
  division {
    __typename
    ...KeyValueInfo
  }
  divisionId
  email
  emergencyContact
  emergencyPhone
  employeeCompanyLevelId
  employeeDepartmentId
  employeeDepartmentLevelId
  employeeDisplayName
  employeeGenderId
  employeeGroup {
    __typename
    ...KeyValueInfo
  }
  employeeGroupId
  employeeId
  employeeOffice {
    __typename
    ...KeyValueInfo
  }
  employeeOfficeId
  employeeRoleId
  employeeShirtSizeId
  employeeStatus {
    __typename
    active
    id
  }
  employeeSuffixId
  employeeTimeId
  employeeTypeId
  ext
  firstName
  firstNameDotLastName
  fullName
  hireDate
  id
  lastName
  manager {
    __typename
    ...EmployeeSimple
  }
  managerId
  middleName
  mobilePhone
  nickname
  personalEmail
  phoneNumber
  relationship
  slackName
  subRegion
  termDate
  title
  userId
}
fragment EmployeeInfoV2 on EmployeeV2 {
  __typename
  businessUnit {
    __typename
    active
    id
    name
  }
  businessUnitId
  companyEmail
  division {
    __typename
    ...KeyValueInfo
  }
  divisionId
  email
  emergencyContact
  emergencyPhone
  employeeCompanyLevelId
  employeeDepartmentId
  employeeDepartmentLevelId
  employeeDisplayName
  employeeGenderId
  employeeGroup {
    __typename
    ...KeyValueInfo
  }
  employeeGroupId
  employeeId
  employeeOffice {
    __typename
    ...KeyValueInfo
  }
  employeeOfficeId
  employeeRoleId
  employeeShirtSizeId
  employeeStatus {
    __typename
    active
    id
  }
  employeeSuffixId
  employeeTimeId
  employeeTypeId
  ext
  firstName
  firstNameDotLastName
  fullName
  hireDate
  id
  lastName
  manager {
    __typename
    ...EmployeeSimpleV2
  }
  managerId
  middleName
  mobilePhone
  nickname
  personalEmail
  phoneNumber
  project {
    __typename
    active
    id
    name
  }
  projectId
  relationship
  slackName
  subRegion
  termDate
  title
  userId
}
fragment EmployeeSimple on Employee {
  __typename
  companyEmail
  email
  emergencyContact
  emergencyPhone
  employeeDepartmentId
  employeeDisplayName
  employeeGenderId
  employeeGroupId
  employeeId
  employeeOfficeId
  employeeSuffixId
  ext
  firstName
  fullName
  id
  lastName
  managerId
  middleName
  nickname
  personalEmail
  phoneNumber
  relationship
  title
  userId
}
fragment EmployeeSimpleV2 on EmployeeV2 {
  __typename
  companyEmail
  email
  emergencyContact
  emergencyPhone
  employeeDepartmentId
  employeeDisplayName
  employeeGenderId
  employeeGroupId
  employeeId
  employeeOfficeId
  employeeSuffixId
  ext
  firstName
  fullName
  id
  lastName
  managerId
  middleName
  nickname
  personalEmail
  phoneNumber
  relationship
  title
  userId
}
fragment EmployeeWithNameInfo on Employee {
  __typename
  firstName
  fullName
  id
  lastName
  userId
}
fragment EmployeeWithNameInfoV2 on EmployeeV2 {
  __typename
  firstName
  id
  lastName
  userId
}
fragment FacilityAddressBrief on FacilityAddress {
  __typename
  addressType {
    __typename
    ...KeyValueInfo
  }
  addressTypeId
  addressTypes {
    __typename
    id
  }
  city
  country
  geopoint {
    __typename
    lat
    lon
  }
  id
  isVerified
  main
  postalCode
  riskInfoSource
  state
  street1
  street2
  thirdPartyId
}
fragment FacilityContactInfo on FacilityContact {
  __typename
  chatType {
    __typename
    ...KeyValueInfo
  }
  chatTypeId
  chatUsername
  contactTypeId
  emailAddress
  extension
  faxNumber
  id
  main
  main
  name
  phoneNumber
  riskInfoSource
  thirdPartyId
}
fragment FacilityNoteInfo on FacilityNote {
  __typename
  createdAt
  id
  noteType
  noteableId
  noteableType
  text
  updatedAt
}
fragment FreightAssignmentRegionInfo on FreightAssignmentRegion {
  __typename
  region
  subRegion
  superRegion
}
fragment KeyValueInfo on KeyValue {
  __typename
  active
  id
  metadataJson
  name
}
fragment LoadOrderCustomerInfo on Customer {
  __typename
  accountingNotes {
    __typename
    id
    noteType
    text
  }
  accountsReceivableOverdue
  addresses {
    __typename
    ...AddressBrief
  }
  availableCredit
  billingAddress {
    __typename
    id
  }
  billingEmail
  code
  contacts {
    __typename
    contactTypeId
    id
    name
  }
  creditStatus
  currencyId
  customerStatusType {
    __typename
    ...KeyValueInfo
  }
  electronicTracking
  id
  insuranceCargo
  invoiceDistributionMethodId
  name
  parent {
    __typename
    code
    creditStatus
    id
    name
  }
  reps {
    __typename
    employee {
      __typename
      employeeGroup {
        __typename
        ...KeyValueInfo
      }
      employeeOffice {
        __typename
        ...KeyValueInfo
      }
      ...EmployeeWithNameInfo
    }
    id
    isLoadRep
    main
    repType {
      __typename
      ...KeyValueInfo
    }
  }
  settings {
    __typename
    ...CustomerSettingInfo
  }
  useParentCredit
}
fragment LoadOrderCustomerInfoV2 on CustomerV2 {
  __typename
  accountingNotes {
    __typename
    id
    noteType
    text
  }
  accountsReceivableOverdue
  addresses {
    __typename
    ...CustomerAddressBriefV2
  }
  availableCredit
  billingAddress {
    __typename
    id
  }
  billingEmail
  code
  contacts {
    __typename
    contactTypeId
    id
    name
  }
  creditStatus
  currencyId
  customerStatusType {
    __typename
    ...KeyValueInfo
  }
  electronicTracking
  id
  insuranceCargo
  invoiceDistributionMethodId
  name
  parent {
    __typename
    code
    creditStatus
    id
    name
  }
  reps {
    __typename
    employee {
      __typename
      employeeGroup {
        __typename
        ...KeyValueInfo
      }
      employeeOffice {
        __typename
        ...KeyValueInfo
      }
      ...EmployeeWithNameInfoV2
    }
    id
    isLoadRep
    main
    repType {
      __typename
      ...KeyValueInfo
    }
  }
  settings {
    __typename
    ...CustomerSettingInfoV2
  }
  useParentCredit
}
fragment LoadOrderStopFacilityInfo on Facility {
  __typename
  code
  id
  mainAddress {
    __typename
    ...AddressBrief
  }
  name
}
fragment LoadOrderStopFacilityInfoV2 on FacilityV2 {
  __typename
  code
  id
  mainAddress {
    __typename
    ...FacilityAddressBrief
  }
  name
}
fragment LoadRouteInfoV2 on LoadRouteV2 {
  __typename
  currentStop {
    __typename
    ...RouteStopForStopEventsGrid
  }
  firstStop {
    __typename
    address {
      __typename
      city
      id
      state
    }
    availableEnd {
      __typename
      timezone
      value
    }
    availableStart {
      __typename
      timezone
      value
    }
    id
    subRegion {
      __typename
      name
      urn
    }
  }
  lastStop {
    __typename
    address {
      __typename
      city
      id
      state
    }
    availableEnd {
      __typename
      timezone
      value
    }
    availableStart {
      __typename
      timezone
      value
    }
    id
    subRegion {
      __typename
      name
      urn
    }
  }
  nextStop {
    __typename
    ...RouteStopForStopEventsGrid
  }
  stops {
    __typename
    ...LoadRouteStopInfo
  }
  stopsV2 @include(if: $useCityStateStop) {
    __typename
    ...LoadRouteStopInfoV2
  }
  ...LoadRouteSlimRouteV2
}
fragment LoadRouteSlimRouteV2 on LoadRouteV2 {
  __typename
  activationStatus {
    __typename
    ...KeyValueInfo
  }
  activationStatusReason
  activeRouteVendors {
    __typename
    ...RouteVendorInfoV2
  }
  braceCount
  braceTypes {
    __typename
    option {
      __typename
      ...KeyValueInfo
    }
  }
  businessUnit
  cargoInsurance {
    __typename
    ...CurrencyInfo
  }
  code
  dimensions {
    __typename
    ...RouteDimensionsInfo
  }
  division
  divisionV2
  expectedMaxWeight(unit: lbs) {
    __typename
    unit
    value
  }
  freightAssignmentInboundRegion
  freightAssignmentOutboundRegion
  hotRoute
  id
  inboundRegion {
    __typename
    ...RegionInfo
  }
  lifeCycleStatus
  maxCost {
    __typename
    ...RouteMaxCostInfo
  }
  outboundRegion {
    __typename
    ...RegionInfo
  }
  postings {
    __typename
    active
    id
    postedRate {
      __typename
      value
    }
  }
  projectV2
  requirements {
    __typename
    option {
      __typename
      ...KeyValueInfo
    }
  }
  routeType
  routeVendors {
    __typename
    ...RouteVendorInfoV2
  }
  segmentCode
  sequence
  size {
    __typename
    ...KeyValueInfo
  }
  tarpCount
  tarpType
  totalDistance(unit: mi) {
    __typename
    unit
    value
  }
  trailerTypes {
    __typename
    ...KeyValueInfo
  }
  transportMode {
    __typename
    ...KeyValueInfo
  }
}
fragment LoadRouteStopFacilityInfo on Facility {
  __typename
  addresses {
    __typename
    ...AddressBrief
  }
  code
  contacts {
    __typename
    ...ContactInfo
  }
  customerFacilities @include(if: $useCustomerLoadDefaults) {
    __typename
    customerId
    facilityId
    id
    isAutoScheduleDefault
    isAutoScheduleEligible
    schedulingSystem
  }
  externalNotes {
    __typename
    ...NoteInfo
  }
  facilityLoadDefaults @include(if: $useCustomerLoadDefaults) {
    __typename
    autoSchedDefault
    autoSchedEligible
    facilityId
    id
    schedSystem
  }
  facilityNote
  id
  loadFromType {
    __typename
    ...KeyValueInfo
  }
  mainAddress {
    __typename
    ...AddressBrief
  }
  name
  schedules {
    __typename
    ...ScheduleInfo
  }
  schedulingContact
  schedulingSystemType {
    __typename
    ...KeyValueInfo
  }
  status
  timezone
  unloadFromType {
    __typename
    ...KeyValueInfo
  }
}
fragment LoadRouteStopFacilityInfoV2 on FacilityV2 {
  __typename
  addresses {
    __typename
    ...FacilityAddressBrief
  }
  code
  contacts {
    __typename
    ...FacilityContactInfo
  }
  customerFacilities @include(if: $useCustomerLoadDefaults) {
    __typename
    customerId
    facilityId
    id
    isAutoScheduleDefault
    isAutoScheduleEligible
    schedulingSystem
  }
  externalNotes {
    __typename
    ...FacilityNoteInfo
  }
  facilityLoadDefaults @include(if: $useCustomerLoadDefaults) {
    __typename
    autoSchedDefault
    autoSchedEligible
    facilityId
    id
    schedSystem
  }
  facilityNote
  id
  loadFromType {
    __typename
    ...KeyValueInfo
  }
  mainAddress {
    __typename
    ...FacilityAddressBrief
  }
  name
  schedules {
    __typename
    ...ScheduleInfoV2
  }
  schedulingContact
  schedulingSystemType {
    __typename
    ...KeyValueInfo
  }
  status
  timezone
  unloadFromType {
    __typename
    ...KeyValueInfo
  }
}
fragment LoadRouteStopInfo on RouteStop {
  __typename
  address {
    __typename
    ...StopAddressInfo
  }
  appointment {
    __typename
    ...AppointmentV2Info
  }
  appointments {
    __typename
    ...AppointmentV2Info
  }
  apptConfBy
  apptReqWith
  availableEnd {
    __typename
    ...DatetimeWithTimezoneInfo
  }
  availableEndTimes {
    __typename
    ...StopRange
  }
  availableStart {
    __typename
    ...DatetimeWithTimezoneInfo
  }
  availableStartTimes {
    __typename
    ...StopRange
  }
  bolNumber
  commodities {
    __typename
    ...CommodityInfoV2
  }
  computedCurrentAppointment {
    __typename
    ...AppointmentV2ForCCAInfo
  }
  distanceToNext(unit: mi) {
    __typename
    unit
    value
  }
  facility @skip(if: $useFacilityV2) {
    __typename
    ...LoadRouteStopFacilityInfo
  }
  facilityV2 @include(if: $useFacilityV2) {
    __typename
    ...LoadRouteStopFacilityInfoV2
  }
  freightAssignmentRegion {
    __typename
    ...FreightAssignmentRegionInfo
  }
  id
  isOrderStop
  liveType
  loadFrom {
    __typename
    ...KeyValueInfo
  }
  loadStopType
  note
  numberOfPallets
  orderStopId
  refs {
    __typename
    id
    type {
      __typename
      ...KeyValueInfo
    }
    value
  }
  reqDate {
    __typename
    ...DatetimeWithTimezoneInfo
  }
  requirements {
    __typename
    option {
      __typename
      ...KeyValueInfo
    }
  }
  scheduleType
  schedulingLog {
    __typename
    ...SchedulingLogInfo
  }
  sealNumber
  stopEventsV2 {
    __typename
    eventSubTypeDatetime
    eventSubTypeID
    eventSubTypeTimezone
    eventTypeID
    id
  }
  trackingAutoETADatetime
  trackingAutoETAUsesDataScienceFormula
  trackingManualETADatetime
  type
  unloadFrom {
    __typename
    ...KeyValueInfo
  }
  workType
}
fragment LoadRouteStopInfoV2 on RouteStopV2 {
  __typename
  address {
    __typename
    ...StopAddressInfoV2
  }
  appointment {
    __typename
    ...AppointmentV2Info
  }
  appointments {
    __typename
    ...AppointmentV2Info
  }
  apptConfBy
  apptReqWith
  availableEnd {
    __typename
    ...DatetimeWithTimezoneInfo
  }
  availableEndTimes {
    __typename
    ...StopRange
  }
  availableStart {
    __typename
    ...DatetimeWithTimezoneInfo
  }
  availableStartTimes {
    __typename
    ...StopRange
  }
  bolNumber
  commodities {
    __typename
    ...CommodityInfoV2
  }
  computedCurrentAppointment {
    __typename
    ...AppointmentV2ForCCAInfo
  }
  distanceToNext(unit: mi) {
    __typename
    unit
    value
  }
  facility @skip(if: $useFacilityV2) {
    __typename
    ...LoadRouteStopFacilityInfo
  }
  facilityV2 @include(if: $useFacilityV2) {
    __typename
    ...LoadRouteStopFacilityInfoV2
  }
  freightAssignmentRegion {
    __typename
    ...FreightAssignmentRegionInfo
  }
  id
  isOrderStop
  liveType
  loadFrom {
    __typename
    ...KeyValueInfo
  }
  loadStopType
  note
  numberOfPallets
  orderStopId
  refs {
    __typename
    id
    type {
      __typename
      ...KeyValueInfo
    }
    value
  }
  reqDate {
    __typename
    ...DatetimeWithTimezoneInfo
  }
  requirements {
    __typename
    option {
      __typename
      ...KeyValueInfo
    }
  }
  scheduleType
  schedulingLog {
    __typename
    ...SchedulingLogInfo
  }
  sealNumber
  type
  unloadFrom {
    __typename
    ...KeyValueInfo
  }
  workType
}
fragment LoadStopInfo on LoadStop {
  __typename
  id
  loadId
  orderStopIds
  routeStopIds
  sequence
}
fragment NewLoadInfoV2 on LoadV2 {
  __typename
  code
  createdAt
  id
  note
  orders {
    __typename
    ...CustomerOrderInfoV2
  }
  routes {
    __typename
    ...LoadRouteInfoV2
  }
  status
  stops {
    __typename
    ...LoadStopInfo
  }
}
fragment NoteInfo on Note {
  __typename
  createdAt
  id
  noteType
  noteableId
  noteableType
  text
  updatedAt
}
fragment PatternCarrierInfo on Carrier {
  __typename
  id
  name
}
fragment PatternCarrierV2Info on CarrierV2 {
  __typename
  id
  name
}
fragment PatternCustomerInfo on Customer {
  __typename
  id
  name
}
fragment PatternCustomerV2Info on CustomerV2 {
  __typename
  id
  name
}
fragment PatternFacilityInfo on Facility {
  __typename
  code
  id
  mainAddress {
    __typename
    city
    country
    id
    main
    postalCode
    state
    street1
    street2
  }
  name
  status
}
fragment PatternFacilityV2Info on FacilityV2 {
  __typename
  code
  id
  mainAddress {
    __typename
    city
    country
    id
    main
    postalCode
    state
    street1
    street2
  }
  name
  status
}
fragment PatternInfo on Pattern {
  __typename
  createdOn
  customer @skip(if: $useCustomerV2) {
    __typename
    ...PatternCustomerInfo
  }
  customerV2 @include(if: $useCustomerV2) {
    __typename
    ...PatternCustomerV2Info
  }
  effectiveDate
  eligibleDays
  eligibleDays
  expirationDate
  id
  laneId
  minimumPickupLeadTime
  numberOfRoutes
  numberOfStops
  patternName
  patternPriority
  patternRoutes {
    __typename
    ...PatternRouteInfo
  }
  updatedBy @skip(if: $useEmployeeV2) {
    __typename
    employee {
      __typename
      firstNameDotLastName
      id
    }
    id
  }
  updatedByV2 @include(if: $useEmployeeV2) {
    __typename
    employee {
      __typename
      firstNameDotLastName
      id
    }
    id
  }
  updatedOn
}
fragment PatternRouteInfo on PatternRoute {
  __typename
  carrier @skip(if: $useCarrierV2) {
    __typename
    ...PatternCarrierInfo
  }
  carrierV2 @include(if: $useCarrierV2) {
    __typename
    ...PatternCarrierV2Info
  }
  divisionId
  id
  loadSizeId
  maxCost
  patternStops {
    __typename
    ...PatternStopInfo
  }
  routeSequence
  routeTypeId
  trailerTypeId
  transportModeId
  vendor @skip(if: $useCarrierV2) {
    __typename
    ...PatternCarrierInfo
  }
  vendorV2 @include(if: $useCarrierV2) {
    __typename
    ...PatternCarrierV2Info
  }
}
fragment PatternStopInfo on PatternStop {
  __typename
  appointment {
    __typename
    appointmentType
    startTime
    stopTime
  }
  daysFromPreviousStop
  dropType
  facility @skip(if: $useFacilityV2) {
    __typename
    ...PatternFacilityInfo
  }
  facilityV2 @include(if: $useFacilityV2) {
    __typename
    ...PatternFacilityV2Info
  }
  id
  requirements {
    __typename
    requirement
  }
  stopSequence
  stopType
  useOrderStopFacility
  workType
}
fragment RegionInfo on Region {
  __typename
  name
  parenturn
  type
  urn
  urn
}
fragment RepInfo on Rep {
  __typename
  employee {
    __typename
    ...EmployeeInfo
  }
  id
  isLoadRep
  main
  repType
}
fragment RepInfoV2 on RepV2 {
  __typename
  active
  businessUnitId
  directionId
  divisionId
  employee {
    __typename
    ...EmployeeGroupsInfoV2
    ...EmployeeInfoV2
  }
  id
  isLoadRep
  main
  modeId
  repType
  repTypeKeyId
  sizeId
}
fragment RouteDimensionsInfo on RouteDimensions {
  __typename
  height(unit: in) {
    __typename
    unit
    value
  }
  length(unit: ft) {
    __typename
    unit
    value
  }
  width(unit: in) {
    __typename
    unit
    value
  }
}
fragment RouteMaxCostInfo on RouteMaxCostType {
  __typename
  loadId
  maxCost
  overMax
  routeId
}
fragment RouteStopForStopEventsGrid on RouteStop {
  __typename
  computedCurrentAppointment {
    __typename
    requestedEnd {
      __typename
      timezone
      value
    }
    requestedStart {
      __typename
      timezone
      value
    }
    requestedTimeRange {
      __typename
      endOffsetMs
      startOffsetMs
    }
  }
  id
}
fragment RouteVendorInfoV2 on RouteVendorV2 {
  __typename
  bookedBy {
    __typename
    ...EmployeeSimple
  }
  bookedWith {
    __typename
    ...ContactInfo
  }
  bookingNotes
  bounced
  bounces {
    __typename
    ...BounceInfoV2
  }
  bracingType
  createdBy {
    __typename
    ...EmployeeSimple
  }
  distance {
    __typename
    asRoundedMiles
  }
  expectedEmptyGeography {
    __typename
    id
    name
    sourceId
    state
    timezone
  }
  id
  numberOfBraces
  numberOfPallets
  numberOfTarps
  palletType
  routeVendorCost {
    __typename
    disableFinancials
    isVoucherRequirementBypassed
    routeId
    totalCost
    vendorId
  }
  routeVendorReferences {
    __typename
    id
    routeVendorReferenceType
    routeVendorReferenceTypeV2
    value
  }
  routeVendorReps {
    __typename
    ...RouteVendorRepInfoV2
  }
  tarpType
  trailerHeight {
    __typename
    asInches
    asRoundedInches
  }
  trailerHeightV2(unit: in) {
    __typename
    unit
    value
  }
  trailerLength {
    __typename
    asFeet
    asRoundedFeet
  }
  trailerLengthV2(unit: ft) {
    __typename
    unit
    value
  }
  trailerType {
    __typename
    ...KeyValueInfo
  }
  trailerWidth {
    __typename
    asInches
    asRoundedInches
  }
  trailerWidthV2(unit: in) {
    __typename
    unit
    value
  }
  utcExpectedEmptyDatetime
  utcPickupEtaDatetime
  vendor @skip(if: $useCarrierV2) {
    __typename
    ...CarrierInfo
  }
  vendorType
  vendorV2 @include(if: $useCarrierV2) {
    __typename
    ...CarrierInfoV2
  }
  ...BookingSource
}
fragment RouteVendorRepInfoV2 on RouteVendorRepV2 {
  __typename
  createdByUser @skip(if: $useEmployeeV2) {
    __typename
    email
    employee {
      __typename
      ...EmployeeSimple
    }
    id
  }
  createdByUserV2 @include(if: $useEmployeeV2) {
    __typename
    email
    employee {
      __typename
      ...EmployeeSimpleV2
    }
  }
  employee @skip(if: $useEmployeeV2) {
    __typename
    employeeGroup {
      __typename
      ...KeyValueInfo
    }
    employeeOffice {
      __typename
      ...KeyValueInfo
    }
    ...EmployeeSimple
  }
  employeeV2 @include(if: $useEmployeeV2) {
    __typename
    employeeGroup {
      __typename
      ...KeyValueInfo
    }
    employeeOffice {
      __typename
      ...KeyValueInfo
    }
    ...EmployeeSimpleV2
  }
  id
  main
  repType
  updatedByUser @skip(if: $useEmployeeV2) {
    __typename
    email
    employee {
      __typename
      ...EmployeeSimple
    }
    id
  }
  updatedByUserV2 @include(if: $useEmployeeV2) {
    __typename
    email
    employee {
      __typename
      ...EmployeeSimpleV2
    }
    id
  }
}
fragment ScheduleEntryInfo on ScheduleEntry {
  __typename
  closed
  hours {
    __typename
    ...ScheduleRangeInfo
  }
  id
}
fragment ScheduleEntryInfoV2 on ScheduleEntryV2 {
  __typename
  closed
  hours {
    __typename
    ...ScheduleRangeInfoV2
  }
  id
}
fragment ScheduleInfo on Schedule {
  __typename
  appointmentType
  dropType
  friday {
    __typename
    ...ScheduleEntryInfo
  }
  id
  loadSize {
    __typename
    ...KeyValueInfo
  }
  loadSizeId
  modeType
  monday {
    __typename
    ...ScheduleEntryInfo
  }
  routeTransportMode {
    __typename
    ...KeyValueInfo
  }
  routeTransportModeId
  saturday {
    __typename
    ...ScheduleEntryInfo
  }
  scheduleTypeNullable
  serviceType
  sunday {
    __typename
    ...ScheduleEntryInfo
  }
  thursday {
    __typename
    ...ScheduleEntryInfo
  }
  trailerTypeIdNullable
  trailerTypeNullable {
    __typename
    ...KeyValueInfo
  }
  tuesday {
    __typename
    ...ScheduleEntryInfo
  }
  wednesday {
    __typename
    ...ScheduleEntryInfo
  }
  workType
}
fragment ScheduleInfoV2 on ScheduleV2 {
  __typename
  appointmentType
  dropType
  friday {
    __typename
    ...ScheduleEntryInfoV2
  }
  id
  loadSize {
    __typename
    ...KeyValueInfo
  }
  loadSizeId
  modeType
  monday {
    __typename
    ...ScheduleEntryInfoV2
  }
  routeTransportMode {
    __typename
    ...KeyValueInfo
  }
  routeTransportModeId
  saturday {
    __typename
    ...ScheduleEntryInfoV2
  }
  scheduleType
  scheduleTypeNullable
  serviceType
  serviceType
  sunday {
    __typename
    ...ScheduleEntryInfoV2
  }
  thursday {
    __typename
    ...ScheduleEntryInfoV2
  }
  trailerType {
    __typename
    ...KeyValueInfo
  }
  trailerTypeId
  trailerTypeIdNullable
  trailerTypeNullable {
    __typename
    ...KeyValueInfo
  }
  tuesday {
    __typename
    ...ScheduleEntryInfoV2
  }
  wednesday {
    __typename
    ...ScheduleEntryInfoV2
  }
  workType
}
fragment ScheduleRangeInfo on ScheduleRange {
  __typename
  endOffsetMs
  id
  startOffsetMs
}
fragment ScheduleRangeInfoV2 on ScheduleRangeV2 {
  __typename
  endOffsetMs
  id
  startOffsetMs
}
fragment SchedulingLogInfo on SchedulingLog {
  __typename
  category
  changedBy @skip(if: $useEmployeeV2) {
    __typename
    employeeDisplayName
    id
  }
  changedByV2 @include(if: $useEmployeeV2) {
    __typename
    employeeDisplayName
    id
  }
  createdAt
  endDate {
    __typename
    timezone
    value
  }
  id
  reason
  scheduleReason
  startDate {
    __typename
    timezone
    value
  }
  timeRange {
    __typename
    endOffsetMs
    id
    startOffsetMs
  }
  type
}
fragment StopAddressInfo on StopAddress {
  __typename
  city
  country
  geopoint {
    __typename
    lat
    lon
  }
  id
  postalCode
  state
  street1
  street2
}
fragment StopAddressInfoV2 on StopAddressV2 {
  __typename
  city
  country
  geopoint {
    __typename
    lat
    lon
  }
  id
  postalCode
  state
  street1
  street2
}
fragment StopRange on ScheduleRange {
  __typename
  endOffsetMs
  id
  startOffsetMs
}
query getLoadV2($id: ID!, $useCarrierV2: Boolean! = false, $useCityStateStop: Boolean! = false, $useCustomerLoadDefaults: Boolean! = false, $useCustomerV2: Boolean! = false, $useEmployeeV2: Boolean! = false, $useFacilityV2: Boolean! = false) {
  loadV2(id: $id) {
    __typename
    ...NewLoadInfoV2
  }
}`
