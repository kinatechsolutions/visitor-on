<template>
  <div class="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
    <h1 class="text-3xl font-bold mb-8 text-center text-gray-800">Terms of Service</h1>

    <div v-for="(term, index) in terms" :key="index" class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">{{ term.section }}</h2>
      <div
        v-for="(subsection, subIndex) in term.subsections"
        :key="subIndex"
        class="pl-4 border-l-2 border-gray-200 mb-4"
      >
        <p class="mb-2 text-gray-600">
          <strong class="text-gray-800 mr-2">{{ subsection.clause }}</strong>
          <span v-html="subsection.content.replace(/\n/g, '<br>')"></span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
  const terms = [
    {
      section: '1. Use of terms',
      subsections: [
        {
          clause: '1.1',
          content:
            'These Terms apply to your use of the Service (as defined below) which includes the VisitorON App. By registering for the Service and/or accessing or using the Service:\nA. You agree to these Terms and our Privacy Policy; and\nB. Where your access and use is on behalf of another person (e.g. a company), you confirm that you are authorised to, and do in fact, agree to these Terms and our Privacy Policy on that person’s behalf and that, by agreeing to these Terms and our Privacy Policy on that person’s behalf, that person is bound by these Terms and our Privacy Policy.',
        },
        {
          clause: '1.2',
          content:
            'If you do not agree to these Terms or do not agree to our Privacy Policy, you are not authorised to access and use the Service, and you must immediately stop doing so.',
        },
        {
          clause: '1.3',
          content:
            'If the processing of Visitor Data is governed by the Data and Privacy 2019 Act of the laws of the Republic of Kenya also form part of these Terms.',
        },
      ],
    },
    {
      section: '2. Changes',
      subsections: [
        {
          clause: '2',
          content:
            'We may change these Terms at any time by notifying you of the change by email or by posting a notice on the Website. Unless stated otherwise, any change takes effect from the date set out in the notice. You are responsible for ensuring you are familiar with the latest Terms. By continuing to access and use the Service from the date on which the Terms are changed, you agree to be bound by the changed Terms.',
        },
      ],
    },
    {
      section: '3. Definitions',
      subsections: [
        {
          clause: 'Confidential Information',
          content:
            'means any information that is not public knowledge and that is obtained from the other party in the course of, or in connection with, the provision and use of the Service. Our Confidential Information includes Intellectual Property owned by us (or our licensors), including the Software. Your Confidential Information includes the Visitor Data.',
        },
        {
          clause: 'Fees',
          content:
            'means the applicable fees set out on our pricing page on the Website or as agreed otherwise in writing between you and us, as may be updated from time to time in accordance with clause 7.7.',
        },
        {
          clause: 'Force Majeure',
          content:
            'means an event that is beyond the reasonable control of a party, excluding:\nan event to the extent that it could have been avoided by a party taking reasonable steps or reasonable care; or\na lack of funds for any reason.',
        },
        {
          clause: 'Intellectual Property Rights',
          content:
            'includes copyright and all rights anywhere in the world conferred under statute, common law or equity relating to inventions (including patents), registered and unregistered trademarks and designs, circuit layouts, data and databases, confidential information, know-how, and all other rights resulting from intellectual activity.',
        },
        {
          clause: 'Intellectual Property',
          content:
            'has a consistent meaning, and includes any enhancement, modification or derivative work of the Intellectual Property.',
        },
        {
          clause: 'Invited or added User',
          content:
            'means any person, other than you, that uses the Service with your authorisation from time to time, including your staff, host, co-host or guest members.',
        },
        {
          clause: 'Objectionable',
          content:
            'includes being objectionable, defamatory, obscene, harassing, threatening, harmful, or unlawful in any way.',
        },
        {
          clause: 'a party',
          content: 'includes that party’s permitted assigns.',
        },
        {
          clause: 'a person',
          content:
            'includes an individual, a body corporate, an association of persons (whether corporate or not), a trust, a government department, or any other entity.',
        },
        {
          clause: 'personal information',
          content: 'means information about an identifiable, living person.',
        },
        {
          clause: 'personnel',
          content:
            'includes officers, employees, contractors and agents, but a reference to your personnel does not include us.',
        },
        {
          clause: 'Service',
          content:
            'means the service having the core functionality described on the Website, as the Website is updated from time to time and includes the VisitorON App.',
        },
        {
          clause: 'Software',
          content:
            'means the software owned by us (and our licensors) that is used to provide the Service and includes the VisitorON App.',
        },
        {
          clause: 'Start Date',
          content:
            'means the date that you register or first access or use the Service, whichever is the earlier.',
        },
        {
          clause: 'VisitorON App',
          content:
            'means any software, web or mobile application provided by us for use in connection with the Service, including any enhancement or modification.',
        },
        {
          clause: 'Terms',
          content: 'means these terms titled VisitorON terms of service.',
        },
        {
          clause: 'Underlying Systems',
          content:
            'means the Software, IT solutions, systems and networks (including software and hardware) used to provide the Service, including any third party solutions, systems and networks.',
        },
        {
          clause: 'We, us or our',
          content: 'means Infiware Solutions Ltd company.',
        },
        {
          clause: 'Website',
          content:
            'means the internet site at www.visitoron.com, or such other site notified to you by us.',
        },
        {
          clause: 'Year',
          content:
            'means a 12-month period starting on the Start Date or the anniversary of that date.',
        },
        {
          clause: 'Your Data',
          content:
            'means all data, content, and information (including personal information) owned, held, used or created by you, by Invited Users or by Visitors that is stored using, or inputted into, the Service, including Visitor or employee Data.',
        },
        {
          clause: 'You or your',
          content:
            'means you or, if clause 1.1B applies, both you and the other person on whose behalf you are acting.',
        },
        {
          clause: 'Visitors',
          content:
            'means visitors or employees that you require to sign in using the Service when they visit or attend work at your premises.',
        },
        {
          clause: 'Visitor or Employee Data',
          content:
            'means personal information about your visitors or employees that is stored using, or inputted into, the Service.',
        },
        {
          clause: 'Words in the singular include the plural and vice versa',
          content: '',
        },
        {
          clause:
            'A reference to a statute includes references to regulations, orders or notices made under or in connection with the statute or regulations and all amendments, replacements or other changes to any of them',
          content: '',
        },
      ],
    },
    {
      section: '4. Service Delivery',
      subsections: [
        {
          clause: '4.1',
          content:
            'We must use reasonable efforts to provide the Service:\na. in accordance with these Terms and Republic of Kenya law;\nb. exercising reasonable care, skill and diligence; and\nc. using suitably skilled, experienced and qualified personnel.',
        },
        {
          clause: '4.2',
          content:
            'Our Service delivery to you is non-exclusive. Nothing in these Terms prevents us from providing the Service to any other person.',
        },
        {
          clause: '4.3',
          content:
            'Subject to clause 4.4, we must use reasonable efforts to ensure the Service is available on a 24/7 basis. However, it is possible that on occasion the Service may be unavailable to permit maintenance or other development activity to take place or Force Majeure. We must use reasonable efforts to publish on the Website advance details of any unavailability.',
        },
        {
          clause: '4.4',
          content:
            'Through the use of web services and APIs, the Service interoperates with a range of third party service features. We do not make any warranty or representation on the availability of those features. Without limiting the previous sentence, if a third party feature provider ceases to provide that feature or ceases to make that feature available on reasonable terms, we may cease to make that feature available to you. To avoid doubt, if we exercise our right to cease the availability of a third party feature, you are not entitled to any refund, discount or other compensation.',
        },
        {
          clause: '4.5',
          content:
            'We follow fair use provisions of our Service, which are determined by VisitorON, and as such we reserve the right to limit your use of the Service if it significantly exceeds fair usage.',
        },
        {
          clause: '4.6',
          content:
            "Where you have elected to access and use the Service for a trial period, then these Terms apply subject to the following:\nA. We will provide the Service to you for a trial period specified from the Start Date (Trial Period).\nB. The Service is provided to you during the Trial Period on an 'as is' basis, and, despite any other provision in these Terms, all conditions, warranties, guarantees and indemnities in relation to the Service are excluded by us to the fullest extent permitted by law.\nC. No Fees are payable for your access and use of the Service during the Trial Period. You must purchase access to the paid version of the Service if you wish to access and use the Service following expiry of the Trial Period.\nD. If you do not purchase access to the paid version of the Service following expiry of the Trial Period, clause 12.9 will apply.",
        },
      ],
    },
    {
      section: '5. Your Responsibilities',
      subsections: [
        {
          clause: '5.1',
          content:
            'You and the Invited Users and Visitors must:\nA. use the Service in accordance with these Terms solely for\nI. your own internal business purposes in the case of you and your Invited Users;\nII. personal use in the case of your Visitors; and\nIII. lawful purposes; and\nB. not resell or make available the Service to any third party, or otherwise commercially exploit the Service.',
        },
        {
          clause: '5.2',
          content:
            'When accessing the Service, you and the Invited Users and Visitors must:\nA. not impersonate another person or misrepresent authorisation to act on behalf of others or us;\nB. correctly identify the sender of all electronic transmissions;\nC. not attempt to undermine the security or integrity of the Underlying Systems;\nD. not use, or misuse, the Service in any way which may impair the functionality of the Underlying Systems or impair the ability of any other user to use the Service;\nE. not attempt to view, access or copy any material or data other than:\nI. that which you are authorised to access; and\nII. to the extent necessary for you to use the Service in accordance with these Terms; and\nF. neither use the Service in a manner, nor transmit, input or store any data, content or information, that breaches any third party right (including Intellectual Property Rights and privacy rights) or is Objectionable, incorrect or misleading.',
        },
        {
          clause: '5.3',
          content:
            'You must:\nA. use the VisitorON App solely in conjunction with the Service;\nB. not copy (except for your own back-up purposes), reproduce, translate, decompile, reverse-engineer, resell, modify, vary, sub-license or otherwise deal in the VisitorON App except to the extent expressly permitted by any law or treaty where that law or treaty cannot be excluded, restricted or modified by these Terms;\nC. ensure the VisitorON App is protected at all times from misuse, damage, destruction or any form of unauthorised use, copying or disclosure;\nD. maintain all proprietary notices on the VisitorON App;\nE. not transfer, assign or otherwise deal with or grant a security interest in the VisitorON App; and\nF. notify us in writing immediately after you become aware of any circumstances which may suggest that any person may have unauthorized knowledge, possession or use of the VisitorON App.',
        },
        {
          clause: '5.4',
          content:
            'You must ensure that you install and use the most recent version of the VisitorON App in accordance with our instructions. We will not be liable for any loss or damage that may result from you failing to comply with this clause.',
        },
        {
          clause: '5.5',
          content:
            "You must procure each Invited User's compliance with these Terms and each Visitor's compliance with clauses 5.1 and 5.2 and any other reasonable condition notified by us to you from time to time.",
        },
        {
          clause: '5.6',
          content:
            'A breach of any of these Terms by your personnel is deemed to be a breach of these Terms by you.',
        },
        {
          clause: '5.7',
          content:
            'You are responsible for procuring all licences, authorisations and consents required for you and your Invited Users and Visitors to use the Service, including to use, store and input Your Data into, and process and distribute Your Data through, the Service.',
        },
      ],
    },
    {
      section: '6. Your data',
      subsections: [
        {
          clause: '6.1',
          content:
            'You acknowledge that:\nA. we may require access to Your Data to exercise our rights and perform our obligations under these Terms; and\nB. to the extent that this is necessary but subject to clause 9, we may authorise a member or members of our personnel to access Your Data for this purpose.',
        },
        {
          clause: '6.2',
          content:
            'You must arrange all consents and approvals that are necessary for us to access Your Data as described in clause 6.1.',
        },
        {
          clause: '6.3',
          content:
            'You acknowledge and agree that in collecting, holding and processing Visitor or Employee Data through the Service, we are acting as your agent for the purposes of the Data and Privacy Act 2019 (Republic of Kenya). You must obtain all necessary consents from the relevant individual to enable us to collect, use, hold and process Visitor or Employee Data in accordance with these Terms.',
        },
        {
          clause: '6.4',
          content:
            'You indemnify us against any liability, claim, proceeding, cost, expense (including the actual legal fees charged by our solicitors) and loss of any kind arising from any actual or alleged claim by a third party that any of Your Data infringes the rights of that third party (including Intellectual Property Rights and privacy rights) or that Your Data is Objectionable, incorrect or misleading.',
        },
      ],
    },
    {
      section: '7. Fees',
      subsections: [
        {
          clause: '7.1',
          content: 'You must pay us the Fees.',
        },
        {
          clause: '7.2',
          content:
            'Other than for credit card payments we will provide you with a valid tax invoice one month prior to the due date for payment or as otherwise agreed in writing with you. For credit card payments we will provide you with valid tax receipts following payment.',
        },
        {
          clause: '7.3',
          content:
            'All Prices are inclusive of VAT unless expressly stated otherwise. If VAT is payable by us on any sale, you must pay us an amount equal to the VAT at the same time as payment is due.',
        },
        {
          clause: '7.4',
          content:
            'Subject to clause 7.5, you must pay the Fees:\nA. within 7 days of the (1) Start Date or the relevant anniversary of the Start Date or (2) date of our invoice; and\nB. electronically in cleared funds without any set-off or deduction.',
        },
        {
          clause: '7.5',
          content:
            'If you have elected to pay the Fees by automatic credit card payment we will charge your credit card account on or around the Start Date or the relevant anniversary of the Start Date.',
        },
        {
          clause: '7.6',
          content:
            'If you have elected to pay the Fees by electronic or wire transfer or mobile money transfer, we will charge you a processing Fee.',
        },
        {
          clause: '7.7',
          content:
            'We reserve the right to increase the Fees at any time on notice to you, which shall take effect from the start of the next applicable Subscription Term following the Subscription Term in which we gave notice to you. Fees for all Products will increase by at least 7% upon each renewal of a Subscription Term unless otherwise notified to you or agreed between the parties in writing.',
        },
        {
          clause: '7.8',
          content:
            'The Fees are non-refundable. There will be no refunds or credits given for partial months of Service, and no refunds for months unused with an open account.',
        },
      ],
    },
    {
      section: '8. Intellectual property',
      subsections: [
        {
          clause: '8.1',
          content:
            'Subject to clause 8.2, title to, and all Intellectual Property Rights in, the Service, the Website, and all Underlying Systems is and remains the property of us (and our licensors). You must not dispute that ownership.',
        },
        {
          clause: '8.2',
          content:
            'Title to, and all Intellectual Property Rights in, Your Data (as between the parties) remains your property. You grant us a worldwide, non-exclusive, fully paid up, transferable, irrevocable licence to use, store, copy, modify, make available and communicate Your Data for any purpose in connection with the exercise of our rights and performance of our obligations in accordance with these Terms.',
        },
        {
          clause: '8.3',
          content:
            'To the extent not owned by us, you grant us a royalty-free, transferable, irrevocable and perpetual licence to use for our own business purposes any know-how, techniques, ideas, methodologies, and similar Intellectual Property used by us in the provision of the Services.',
        },
        {
          clause: '8.4',
          content:
            'If you provide us with ideas, comments or suggestions relating to the Service or Underlying Systems (feedback):\nA. all Intellectual Property Rights in that feedback, and anything created as a result of that feedback (including new material, enhancements, modifications or derivative works), are owned solely by us; and\nB. we may use or disclose the feedback for any purpose.',
        },
        {
          clause: '8.5',
          content:
            'You acknowledge that the Service may link to third party websites that are connected or relevant to the Service. Any link from the Service does not imply that we endorse, approve or recommend, or have responsibility for, those websites or their content or operators. To the maximum extent permitted by law, we exclude all responsibility or liability for those websites.',
        },
      ],
    },
    {
      section: '9. Confidentiality',
      subsections: [
        {
          clause: '9.1',
          content:
            'Each party must, unless it has the prior written consent of the other party:\nA. keep confidential at all times the Confidential Information of the other party;\nB. effect and maintain adequate security measures to safeguard the other party’s Confidential Information from unauthorised access or use; and\nC. disclose the other party’s Confidential Information to its personnel or professional advisors on a need to know basis only and, in that case, ensure that any personnel or professional advisor to whom it discloses the other party’s Confidential Information is aware of, and complies with, clauses 9.1a and 9.1b.',
        },
        {
          clause: '9.2',
          content:
            'The obligation of confidentiality in clause 9.1a does not apply to any disclosure or use of Confidential Information:\nA. for the purpose of performing a party’s obligations, or exercising a party’s rights, under these Terms;\nB. required by law (including under the rules of any stock exchange);\nC. which is publicly available through no fault of the recipient of the Confidential Information or its personnel;\nD. which was rightfully received by a party from a third party without restriction and without breach of any obligation of confidentiality; or\nE. by us if required as part of a bona fide sale of our business (assets or shares, whether in whole or in part) to a third party, provided that we enter into a confidentiality agreement with the third party on terms no less restrictive than this clause 9.',
        },
      ],
    },
    {
      section: '10. Warranties',
      subsections: [
        {
          clause: '10.1',
          content:
            'Each party warrants that it has full power and authority to enter into, and perform its obligations, under these Terms.',
        },
        {
          clause: '10.2',
          content:
            'To the maximum extent permitted by law:\nA. our warranties are limited to those set out in these Terms, and all other conditions, guarantees or warranties whether expressed or implied by statute or otherwise are expressly excluded and, to the extent that they cannot be excluded, liability for them is limited to the law; and\nB. we make no representation concerning the quality of the Service and do not promise that the Service will:\nI. meet your requirements or be suitable for a particular purpose, including that the use of the Service will fulfil or meet any statutory role or responsibility you may have; or\nII. be secure, free of viruses or other harmful code, uninterrupted or error free.',
        },
        {
          clause: '10.3',
          content:
            'You agree and represent that you are acquiring the Service, and accepting these Terms, for the purpose of a business.',
        },
        {
          clause: '10.4',
          content:
            'Where legislation or rule of law implies into these Terms a condition or warranty that cannot be excluded or modified by contract, the condition or warranty is deemed to be included in these Terms. However, our liability for any breach of that condition or warranty is limited, at our option, to:\nA. supplying the Service again; and/or\nB. paying the costs of having the Service supplied again.',
        },
      ],
    },
    {
      section: '11. Liability',
      subsections: [
        {
          clause: '11.1',
          content:
            'Our maximum aggregate liability under or in connection with these Terms or relating to the Service, whether in contract, tort (including negligence), breach of statutory duty or otherwise, must not in any Year exceed Ksh 5,000.',
        },
        {
          clause: '11.2',
          content:
            'Neither party is liable to the other under or in connection with these Terms or the Service for any:\nA. loss of profit, revenue, savings, business, use, data (including Your Data), and/or goodwill; or\nB. consequential, indirect, incidental or special damage or loss of any kind.',
        },
        {
          clause: '11.3',
          content:
            'Clauses 11.1 and 11.2 do not apply to limit our liability under or in connection with these Terms for:\nA. personal injury or death;\nB. fraud or wilful misconduct; or\nC. a breach of clause 9.',
        },
        {
          clause: '11.4',
          content:
            'Clause 11.2 does not apply to limit your liability:\nA. to pay the Fees;\nB. under the indemnity in clause 6.6; or\nC. for those matters stated in clause 11.3a to 11.3c.',
        },
        {
          clause: '11.5',
          content:
            'Neither party will be responsible, liable, or held to be in breach of these Terms for any failure to perform its obligations under these Terms or otherwise, to the extent that the failure is caused by the other party failing to comply with its obligations under these Terms, or by the negligence or misconduct of the other party or its personnel.',
        },
        {
          clause: '11.6',
          content:
            'Each party must take reasonable steps to mitigate any loss or damage, cost or expense it may suffer or incur arising out of anything done or not done by the other party under or in connection with these Terms or the Service.',
        },
      ],
    },
    {
      section: '12. Term, termination and suspension',
      subsections: [
        {
          clause: '12.1',
          content:
            'Unless terminated under this clause 12, these Terms and your right to access and use the Service:\nA. starts on the Start Date; and\nB. continues until a party gives notice that these Terms and your access to and use of the Service will terminate on the expiry of that notice.',
        },
        {
          clause: '12.2',
          content:
            "Either party may, by notice to the other party, immediately terminate these Terms and your right to access and use the Service if the other party:\nA. breaches any material provision of these Terms and the breach is not:\nI. remedied within 10 days of the receipt of a notice from the first party requiring it to remedy the breach; or\nII. capable of being remedied; or\nB. becomes insolvent, liquidated or bankrupt, has an administrator, receiver, liquidator, statutory manager, mortgagee's or chargee's agent appointed, becomes subject to any form of insolvency action or external administration, or ceases to continue business for any reason.",
        },
        {
          clause: '12.3',
          content:
            'Your Subscription Term(s) shall be for the period as specified in the applicable Order and commencing on the date specified in the Order and, unless otherwise agreed to in writing, each applicable Subscription Term shall automatically renew for equivalent Subscription Terms (for example, if your initial Subscription Term is two years, each applicable renewal term shall be two years) unless you have given notice of termination at least 60 days prior to the end of the applicable Subscription Term, or unless terminated earlier in accordance with this Agreement.',
        },
        {
          clause: '12.4',
          content:
            "Termination of these Terms does not affect either party's rights and obligations that accrued before that termination.",
        },
        {
          clause: '12.5',
          content:
            'On termination of these Terms, you must pay all Fees for the provision of the Service prior to that termination.',
        },
        {
          clause: '12.6',
          content:
            'No compensation is payable by us to you as a result of termination of these Terms for whatever reason, and you will not be entitled to a refund of any Fees that you have already paid.',
        },
        {
          clause: '12.7',
          content:
            "Except to the extent that a party has ongoing rights to use Confidential Information, at the other party's request following termination of these Terms but subject to clause 12.8, a party must promptly return to the other party or destroy all Confidential Information of the other party that is in the first party's possession or control.",
        },
        {
          clause: '12.8',
          content:
            'On termination of these Terms, we may, at our sole discretion, elect to retain Your Data in suspense for up to 12 months (which means that Your Data may be able to be recovered if you subsequently restart the Service) or delete or anonymise all of Your Data from our Service. We give no guarantee that Your Data can be recovered once your account is cancelled. We are not liable for any loss or damage following, or as a result of, cancellation of your account, and it is your responsibility to ensure that Your Data which you require is backed-up or replicated before cancellation. You acknowledge that we are unable to supply a complete copy of Visitor images and signature records whether before or after termination.',
        },
        {
          clause: '12.9',
          content:
            'If you subscribe for a trial period and do not purchase access to the paid version of the Service at the end of the trial, or if you stop making payment for the Service, we may, at our sole discretion:\nA. elect to retain Your Data in suspense for up to 12 months, which means that Your Data may be able to be recovered if you subsequently restart the Service (but we give no guarantee that it can be recovered); and/or\nB. treat your account as being cancelled and delete or anonymise Your Data in accordance with clause 12.8 (in which case these Terms will be deemed to have terminated).',
        },
        {
          clause: '12.10',
          content:
            'Without limiting any other right or remedy available to us, we may restrict or suspend your access to and use of the Service and/or delete, edit or remove relevant data if we consider that you or any of your personnel have:\nA. undermined, or attempted to undermine, the security or integrity of the Service or any Underlying Systems;\nB. used, or attempted to use, the Service:\nI. for improper purposes; or\nII. in a manner, other than for normal operational purposes, that materially reduces the operational performance of the Service;\nC. transmitted, inputted or stored any data (including Your Data) that breaches or may breach these Terms or any third party right (including Intellectual Property Rights and privacy rights), or that is or may be Objectionable, incorrect or misleading; or\nD. otherwise materially breached these Terms.',
        },
      ],
    },
    {
      section: '13. General',
      subsections: [
        {
          clause: '13.1',
          content:
            'Neither party is liable to the other for any failure to perform its obligations under these Terms to the extent caused by Force Majeure.',
        },
        {
          clause: '13.2',
          content:
            'No person other than you and us has any right to a benefit under, or to enforce, these Terms.',
        },
        {
          clause: '13.3',
          content:
            'For us to waive a right under these Terms, that waiver must be in writing and signed by us.',
        },
        {
          clause: '13.4',
          content:
            'Subject to clause 6.3, we are your independent contractor, and no other relationship (e.g. joint venture, agency, trust or partnership) exists under these Terms.',
        },
        {
          clause: '13.5',
          content:
            'If we need to contact you, we may do so by email or by posting a notice on the Website. You agree that this satisfies all legal requirements in relation to written communications.',
        },
        {
          clause: '13.6',
          content:
            'These Terms, and any dispute relating to these Terms or the Service, are governed by and must be interpreted in accordance with the laws of the Republic of Kenya. Each party submits to the non-exclusive jurisdiction of the Courts of the Republic of Kenya in relation to any dispute connected with these Terms or the Service.',
        },
        {
          clause: '13.7',
          content:
            'Clauses which, by their nature, are intended to survive termination of these Terms, including clauses 6.4, 8, 9, 11, 12.4 to 12.9 and 13.6, continue in force.',
        },
        {
          clause: '13.8',
          content:
            'If any part or provision of these Terms is or becomes illegal, unenforceable, or invalid, that part or provision is deemed to be modified to the extent required to remedy the illegality, unenforceability or invalidity. If a modification is not possible, the part or provision must be treated for all purposes as severed from these Terms. The remainder of these Terms will be binding on you.',
        },
        {
          clause: '13.9',
          content:
            'Subject to clauses 2 and 7.7, any variation to these Terms must be in writing and signed by both parties.',
        },
        {
          clause: '13.10',
          content:
            'These Terms set out everything agreed by the parties relating to the Service, and supersede and cancel anything discussed, exchanged or agreed prior to the Start Date. The parties have not relied on any representation, warranty or agreement relating to the Service that is not expressly set out in these Terms, and no such representation, warranty or agreement has any effect from the Start Date.',
        },
        {
          clause: '13.11',
          content:
            'You may not assign, novate, subcontract or transfer any right or obligation under these Terms without our prior written consent, that consent not to be unreasonably withheld. You remain liable for your obligations under these Terms despite any approved assignment, subcontracting or transfer. We may assign these Terms and any of our rights or obligations under these Terms to an Affiliate, in our sole discretion.',
        },
      ],
    },
  ];
</script>

<style scoped>
  .container {
    max-width: 800px;
  }

  h1 {
    letter-spacing: 0.05rem;
  }

  h2 {
    letter-spacing: 0.025rem;
  }

  p {
    line-height: 1.6;
  }
</style>
