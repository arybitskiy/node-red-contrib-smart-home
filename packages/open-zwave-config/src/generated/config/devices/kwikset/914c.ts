import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0090:0446:0003",
            name: "OzwInfoPage",
          },
          { text: "images/kwikset/914c.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2268",
            id: "0446",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0446",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "914C", id: "0446", name: "Identifier", type: "0003" },
          {
            text:
              "https://www.kwikset.com/products/detail/kwikset-convert-smart-lock-conversion-kit-with-z-wave-technology",
            name: "ProductPage",
          },
          {
            text:
              "Extend your smart home system to your current deadbolt, enabling your existing deadbolt to wirelessly communicate with your smart home or security system\nDramatically reduced, all-metal interior \nWorks with existing select single cylinder deadbolts",
            name: "Description",
          },
          {
            text: "http://www.kwikset.com/Customer-Support/Overview.aspx",
            name: "ProductSupport",
          },
          { text: "Convert Electronic Deadbolt", name: "Name" },
          {
            text:
              "The electronic conversion kit remains asleep until an action occurs on the latch or a request is received from the RF side.\nFor the RF side, it will wake up every 1 second to check if there are any requests from your smart home controller.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2268/Install_Guide_914C_03_09_2017.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Initiate the process to add the lock to your system at your smart home controller.\nWhen prompted by your smart home system to add the lock, press button “A” on the lock interior one time. The red LED will illuminate when the lock enters Add Mode.\nPlease allow time for the controller to add the lock to your system.",
            name: "InclusionDescription",
          },
          {
            text:
              "Follow your smart home system’s instructions to remove the lock from the network. When prompted by the system, press button A” on the lock interior once.  The red LED will illuminate when the lock enters Remove mode.",
            name: "ExclusionDescription",
          },
          {
            text:
              "A factory reset will delete all user codes associated with the lock and will remove itself from your smart home system.\nPlease only perform a factory reset when the primary controller is missing or inoperable.\n\nTo perform a factory reset, please perform the following:  \n1. Remove the battery pack\n2. Press and HOLD the Program button while reinserting the battery pack.\n3. Keep holding the button for 30 seconds until the lock beeps and the status LED flashes red.\n4. Press the Program button once more.  The status LED will flash green and red several times.\n5. After a few seconds, the lock will initiate the door handing process.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2268/xml",
                author: "Jeff Sanicola - jeff.sanicola@outlook.com",
                date: "20 Dec 2019",
                revision: 1,
              },
              {
                text:
                  "Fixed index of alarm message to trigger lock status refresh",
                author: "steve28",
                date: "14 Jun 2020",
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
            index: "31",
            instance: "1",
            label: "Dipswitches state",
            max: "255",
            min: "0",
            read_only: "true",
            type: "byte",
            Help:
              "Bit mask field that returns the state of the user accessible Dipswitches on the door look.\n\t\t\tBit 0 Lock LED Status (1: enable)\n\t\t\tBit 1 Autolock (1: enable)\n\t\t\tBit 2 Buzzer (1: enable)\n\t\t\tBit 3 Handing Invert (1: enable)\n      ",
          },
          {
            genre: "config",
            index: "33",
            instance: "1",
            label: "MSB SKU part numbers",
            max: "255",
            min: "0",
            type: "byte",
            Help:
              "The Configuration Parameter 33 and 34 are used to set the SKU part numbers to the Kwikset locks. \n\t\t\tIs the first four most significant bytes (MSB). \n\t\t\tBelow describes how Configuration Parameter 33 and 34 are being used.\n\t\t\t* For a ZW Configuration Set, the DLM will first do a GET_SKU_ID to retrieve the full SKU from the lock, and the lock will respond with all 8 bytes. (If it not yet set, the DLM will consider that as all 0x30s.) \n\t\t\t  The DLM changes only the appropriate 4 bytes in its local copy of the SKU, and it then sends the full 8 bytes down to the lock in a SET_SKU_ID.\n\t\t\t* For a ZW Configuration Get, the DLM will do a GET_SKU_ID down to the lock, to which the lock will respond with all 8 bytes. \n\t\t\t  The DLM will return the requested 4 bytes via ZW. If the SKU is not set, it will return all 0x30s (ASCII 0s).\n\t\t\t",
          },
          {
            genre: "config",
            index: "34",
            instance: "1",
            label: "LSB SKU part numbers",
            max: "255",
            min: "0",
            type: "byte",
            Help:
              "The Configuration Parameter 33 and 34 are used to set the SKU part numbers to the Kwikset locks. \n\t\t\tIs the least four significant bytes (LSB). \t\t\t\n      ",
          },
          {
            genre: "config",
            index: "40",
            label: "Reset To Factory Defaults",
            size: "1",
            type: "list",
            value: "0",
            write_only: "true",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Perform Factory Reset", value: "1" },
              { label: "Normal", value: "0" },
            ],
          },
        ],
      },
      {
        id: "113",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "6",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "98",
                Index: "1",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
