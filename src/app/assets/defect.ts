export enum DefectType {
    UI='UI',
    MissUnderstand = 'Miss Understand',
    DevCreated = 'Dev Created',
    EdgeCase = 'Edge Case',
    Unknown = 'Unknonw',
    DoesNotWorkAsDesign = 'Does not work as design',
    BrowserIssue = 'Browser issue',
    Enhancement = 'Enhancement',
    PerformanceIssue = 'Performance issue',
    FunctionalityLoss = 'Functionality Loss',
    Installation = 'Installation'

}

export const defects = [
    {
        type: DefectType.DevCreated,
        title: 'ngMtell_V14.0.4_Sensor role panel and KPI panel should have similar behaviors',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/909699',
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell-WAB-It is not need to send GET API on the unchecked datasource.',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/807464'
    },
    {
        type: DefectType.Installation,
        title: 'Mtell- V14.0.4- Template folder is not created in installation',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907557'
    },
    {
        type: DefectType.BrowserIssue,
        title: 'ngMtell-data sync in legacy Mtell and NGM-The blank space in the middle of the asset name is missing',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/905338'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell-data sync issue - lost model on WAB asset ',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/905394'
    },
    {
        type: DefectType.BrowserIssue,
        title: 'ngMtell_V14.0.4_Web Agent Builder_Should compress to one space in tooltip when there are multiple spaces in the expression',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/905896'
    },
    {
        type: DefectType.UI,
        title: 'Mtell_ V14.0.4_ There should be a vertical line between the Data Source Tags table and Sensor Roles table',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/906722'
    },
    {
        type: DefectType.UI,
        title: 'Web Agent Builder_ There exist UI display issues for fields under the Specifications tab',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/906726'
    },
    {
        type: DefectType.Enhancement,
        title: 'Mtell_ V14.0.4_ Enhancement_ The search bar should ignore Spaces to search results that match the keywords order',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/906791'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell_V14.0.4_Web Agent Builder_Should show the data source of the tag in Data Source column for the mapped sensor role after refreshing the page ',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907346'
    },
    {
        type: DefectType.UI,
        title: 'ngMtell_V14.0.4_Web Agent Builder_Should show "..." at the end of the long KPI name in the Delete KPI dialog',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907374'
    },
    {
        type: DefectType.UI,
        title: 'Mtell- V14.0.4- Tooltip should display the full words',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907383'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell_ Refresh issues of loading image',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907448',
        comment: 'complex case'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell_V14.0.4_Web Agent Builder_ After saving the asset, saving the KPI failed',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907765'
    },
    {
        type: DefectType.MissUnderstand,
        title: 'Web Agent Builder_ Save KPI button should be disabled if making no changes to the KPI',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907395'
    },
    {
        type: DefectType.Enhancement,
        title: 'Mtell_ V14.0.4_ Enhancement_ UX_ When the maximum number of characters in the input field is limited, text prompts are recommended',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907769'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'Web Agent Builder_ KPI disappears when saving the asset after deleting the existing sensor roles',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907867'
    },
    {
        type: DefectType.UI,
        title: 'ngMtell_ Change arrow icon to hand icon when hover on editable button',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907912'
    },
    {
        type: DefectType.Enhancement,
        title: 'Mtell_ v14.0.4_ Enhancement_ It is recommended that the table jump to the last row to display the newly added sensor role after adding the sensor role, click save button',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907918'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'Mtell_ V14.0.4_ The tooltip should be detailed when the senor role name is duplicated',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907924'
    },
    {
        type: DefectType.UI,
        title: 'ngMtell_V14.0.4_Web Agent Builder_Lost insert button in the page when the browser window is small',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907926'
    },
    {
        type: DefectType.Unknown,
        title: 'Web Agent Builder_ KPI would be replaced by the sensor role with the same name that imports from CSV',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907937',
        comment: 'investigated'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell_V14.0.4_Web Agent Builder_The new KPI should show in the tile when the expression has an unmapped sensor role after clicking save KPI button',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907976'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell_V14.0.4_Web Agent Builder_Should show an ‘i’ icon with the tooltip when the expression for KPI has an unmapped sensor role',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/907981'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell-WAB-open one asset-fails to get the IP21 tag list on searching without any user input',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908301'
    },
    {
        type: DefectType.PerformanceIssue,
        title: 'ngMtell_V14.0.4_Web Agent Builder_Performance_The response time of the page is too long when uploading a picture with a large size',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908382'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell_ Should show tooltip if hover on variable name when insert variable',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908383'
    },
    {
        type: DefectType.UI,
        title: 'ngMtell_ The icon of Interpolate function is inconsistent with mockup',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908386'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: `ngMtell_ Filter of Variables/Mapping/Type column doesn't work when insert expression`,
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908434'
    },
    {
        type: DefectType.FunctionalityLoss,
        title: 'Mtell_V14.0.4_ Fail to map the same Tag reference from different Data Sources',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908435'
    },
    {
        type: DefectType.Unknown,
        title: 'Web Agent Builder_ Suggestion_ KPI name field should be validated real time',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908440',
        comment: 'invectigated'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell-WAB-lost sensor roles which coming from asset template when saving asset',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908497',
        comment: 'known issue?'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell_V14.0.4_Web Agent Builder_The “<” and the variable will disappear when the expression is invalid',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908476'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell_ Image cannot be imported from template file',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908491'
    },
    {
        type: DefectType.UI,
        title: 'Mtell_ V14.0.4_ Data should not be obscured when shrinking the window',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908501'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell_ Deleted image will re-appear after refreshing page',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908521'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell_ Location should have no Manufacturer and Model number on WAB',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908531',
        comment: 'indicated in spec?'
    },
    {
        type: DefectType.MissUnderstand,
        title: 'ngMtell_ For the first release, should disable Location in the tree just like Site',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/909591',
        comment: 'from another defect'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'Mtell_ V14.0.4_ Start date should defaults to six months earlier than the current date',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908495'
    },
    {
        type: DefectType.Unknown,
        title: 'ngMtell_V14.0.4_Web Agent Builder_The expression should be invalid when circular references exist',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908493',
        comment: 'not sure'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908500',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908500',
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: `Web Agent Builder_ KPI's state should be updated after clicking the Save KPI button`,
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908544'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'ngMtell_V14.0.4_Web Agent Builder_The invalid expression should validate failed when editing a KPI',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/908554'
    },
    {
        type: DefectType.UI,
        title: 'Web Agent Builder_ Some text display issues on the tooltips',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/909629'
    },
    {
        type: DefectType.DoesNotWorkAsDesign,
        title: 'Web Agent Builder_ KPI should not be added if no expression is specified',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/909716',
        comment: 'not sure'
    },
    {
        type: DefectType.Installation,
        title: 'ngMtell-fail to launch two python service when NGM media is installed with Mtell V14.0.2',
        url: 'https://aspentech-alm.visualstudio.com/AspenTech/_workitems/edit/909733'
    }
];

