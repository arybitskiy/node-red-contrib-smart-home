import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/021F:0088:0003",
            name: "OzwInfoPage",
          },
          { text: "images/dome/0088.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2059/",
            id: "0088",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2059/Dome Siren Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The Dome™ Home Automation DMS01 Siren offers ten user selectable sounds with three volume levels (at up to 105dB) and adjustable siren timeout (30/60/300 seconds or infinite). It includes a functionality of an alarm siren, doorbell and an audible chime notification when door/window opens (advanced settings subject to Z-Wave Hub compatibility). Additional visual notification is provided by built-in flashing LED’s when triggered. One of a kind device on the market with 100% battery operation allowing for easy installation anywhere in your home. There is a 3-year battery life, so you can always be confident that your siren has power. Extra-long Z-Wave wireless range (up to 150 ft) allows you to place it where it’s needed without worrying if the signal is reaching your Z-Wave Hub. Dome™ DMS01 Siren comes with a 1-year limited warranty. Measurements in inches: 2.625 x 2.625 x 1.125. Dome™ Home Automation Z-Wave devices give your family peace of mind and security you can count on. With Dome™, you’re always connected and always covered.",
            name: "Description",
          },
          {
            text:
              "Follow the instructions for your Z-Wave certified Controller to enter exclusion mode.\nWhen prompted by the Controller:\n1. Remove the Back Plate of the Siren.\n2. Press the Connect Button quickly 3 times in a row.\nThe LED Ring will flash five times indicating exclusion/disconnection.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0088",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "Follow the instructions for your Z-Wave certified Controller to enter inclusion mode.\nWhen prompted by the Controller:\n1. For proper inclusion, bring the Siren to the final location where it will be used. *\n2. Remove the Back Plate of the Siren.\n3. Remove the Battery Tabs.\n4. Press the Connect Button quickly 3 times in a row.\nThe LED Ring will flash five times indicating inclusion.\n*For non Z-Wave Plus networks, please consult the owner’s manual for your primary controller to determine the best method and location for adding the Siren to your Z-Wave network.",
            name: "InclusionDescription",
          },
          { text: "Dome Z-Wave Plus Siren", name: "Name" },
          {
            text:
              "To disconnect from the Z-Wave Network and restore factory default settings:\n1. Open the Back Plate and make sure the Siren is powered.\n1. Hold the Connect Button for 10 seconds until the LED Ring blinks once, then release the button.\nOnly do this if the controller is missing or otherwise unreachable!",
            name: "ResetDescription",
          },
          { text: "DMS01", id: "0088", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2059/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Primary Notification Volume Level",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            units: "level",
            value: "3",
            Help:
              "This parameter sets the volume of the Siren (primary) sound. There are three possible volume levels available.",
            Item: [
              { label: "Low", value: "1" },
              { label: "Medium", value: "2" },
              { label: "High", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Primary Notification Length",
            max: "255",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "This parameter defines the length of the Alarm/primary notification.",
            Item: [
              { label: "30 Seconds", value: "1" },
              { label: "1 Minute", value: "2" },
              { label: "2 Minutes", value: "3" },
              { label: "Until battery depleted", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Secondary Notification Length",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "This parameter defines the number of times the Chime/Secondary Notification will play.",
          },
          {
            genre: "config",
            index: "4",
            label: "Secondary Notification Volume",
            max: "3",
            min: "3",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter sets the volume of the Chime (secondary) sound. There are three possible volume levels available.",
            Item: [
              { label: "Low", value: "1" },
              { label: "Medium", value: "2" },
              { label: "High", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Primary Notification Sound",
            max: "10",
            min: "1",
            size: "1",
            type: "list",
            value: "10",
            Help:
              "\n        The Siren offers ten different sounds to use as the Siren (primary) notification.\n        This parameter sets the Siren (primary) notification sound.\n      ",
            Item: [
              { label: "Doorbell", value: "1" },
              { label: "Fur Elise", value: "2" },
              { label: "Doorbell Extended", value: "3" },
              { label: "Alert", value: "4" },
              { label: "William Tell", value: "5" },
              { label: "Rondo Alla Turca", value: "6" },
              { label: "Police Siren", value: "7" },
              { label: "Evacuation", value: "8" },
              { label: "Beep Beep", value: "9" },
              { label: "Beep", value: "10" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Secondary Notification Sound",
            max: "10",
            min: "1",
            size: "1",
            type: "list",
            value: "9",
            Help:
              "\n        If Parameter 7 is set to 02, the Siren will play a secondary chime sound instead of the main alarm.\n        The Siren offers ten different sounds to use as the Chime (secondary) notification.\n        This parameter sets the Chime (secondary) notification sound.\n      ",
            Item: [
              { label: "Doorbell", value: "1" },
              { label: "Fur Elise", value: "2" },
              { label: "Doorbell Extended", value: "3" },
              { label: "Alert", value: "4" },
              { label: "William Tell", value: "5" },
              { label: "Rondo Alla Turca", value: "6" },
              { label: "Police Siren", value: "7" },
              { label: "Evacuation", value: "8" },
              { label: "Beep Beep", value: "9" },
              { label: "Beep", value: "10" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Toggle Secondary Chime",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This Parameter toggles between the Primary and Secondary notification sound to be played when the Siren receives a BINARY_SWITCH_SET(FF) command.",
            Item: [
              { label: "Primary Notification Will Play", value: "1" },
              { label: "Secondary Notification Will Play", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Primary Notification Strobe",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This Parameter enables or disables the Flashing LED Ring (strobe) accompanying the Primary Notification.",
            Item: [
              { label: "LED Ring Will Not Flash", value: "0" },
              { label: "LED Ring Will Flash", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "Secondary Notification Strobe",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This Parameter enables or disables the Flashing LED Ring (strobe) accompanying the Secondary Notification.",
            Item: [
              { label: "LED Ring Will Not Flash", value: "0" },
              { label: "LED Ring Will Flash", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Control Commands", max_associations: "5" },
              {
                index: "3",
                label: "Send Notification Report",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
