import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          { text: "ID Lock 150 Z-Wave module", name: "Name" },
          {
            text:
              "A module enabling your ID Lock digital door lock to a Z-Wave Plus enabled digital door Lock.\n\nThe module is compatible with ID Lock 101 and ID Lock 150.\n\nIt enables your ID Lock to operate in a Z-Wave network with numerous access control funtions and notifications.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0373:0001:0003",
            name: "OzwInfoPage",
          },
          { text: "https://idlock.no/z-wave/", name: "ProductPage" },
          { text: "https://idlock.no/kundesenter/", name: "ProductSupport" },
          { text: "images/idlock/idlock150.png", name: "ProductPic" },
          {
            text:
              "https://idlock.no/wp-content/uploads/2019/08/IDLock150_ZWave_UserManual_v3.02.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Activate by touching the touch panel with finger(s), the palm of the hand on the outside unit or by pushing the key button on the inside unit.",
            name: "WakeupDescription",
          },
          {
            text:
              'Inclusion – (Puts your device in inclusion mode)\n\n•\t Push and hold key button until all LEDs on touch panel activates (with ID Lock in an unlocked state).\n•\t Release button.\n•\t Enter Master PIN followed by * on touch panel.\n•\t Press digit "2" for settings followed by * on touch panel.\n•\t Press digit “5” on touch panel.\n\nInclusion mode starts immediately. LED indicator below logo signals this by flashing blue.',
            name: "InclusionDescription",
          },
          {
            text:
              'Exclusion – (Puts your device in exclusion mode)\n\n•\t Push and hold key button until all LEDs on touch panel activates (with ID Lock in an unlocked state).\n•\t Release button.\n•\t Enter Master PIN followed by * on touch panel.\n•\t Press digit "2" for settings followed by * on touch panel.\n•\t Press digit “5” on touch panel.\n\nExclusion mode starts immediately. LED indicator below logo signals this by flashing blue.',
            name: "ExclusionDescription",
          },
          {
            text:
              'Device reset – (This will reset RF interface module to factory default settings)\nWarning: Please do only proceed with the following reset procedure, if primary network controller is missing or otherwise inoperable.\n\nRESET Z-WAVE MODULE:\n\n• Push and hold key button until all LEDs on touch panel activates (with ID Lock in an unlocked state).\n• Release button.\n• Enter Master PIN followed by * on keypad.\n• Press digit "2" for settings followed by * on keypad.\n• Press digit “0” on keypad.\n\nIf the Z-wave module is not included in a Z-wave network the door lock will also return to factory settings when following the above procedure.\n\nFACTORY RESET DOOR LOCK FIRMWARE:\n\n•\t Push and hold inside lock/unlock button while inserting the fourth battery.\n•\t Receive reset sound.\n•\t Release button.\n•\t Receive confirmation sound.',
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2780/",
            id: "0001",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "ID-150", id: "0001", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2780/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text: "Update as per the 1.4.9/1.6 firmware specification",
                author: "Eirik Hodne",
                date: "25 Aug 2019",
                revision: 3,
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
            label: "Door Lock Mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n        Door Lock Mode\n        Autolock Mode, Manual lock mode, Activate Away Mode, Deactivate Away Mode\n        Default Value : 1 ( Auto lock, Away off )\n      ",
            Item: [
              { label: "Manual lock, Away off", value: "0" },
              { label: "Auto lock, Away off", value: "1" },
              { label: "Manual lock, Away on", value: "2" },
              { label: "Auto lock, Away on", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "RFID Mode",
            max: "9",
            min: "5",
            size: "1",
            type: "list",
            units: "",
            value: "5",
            Help:
              "\n        RFID Mode\n        RFID activated\n        RFID deactivated\n        Default Value: 5 (RFID activated)\n      ",
            Item: [
              { label: "RFID activated", value: "5" },
              { label: "RFID deactivated", value: "9" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Door Hinge Direction",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n        Door Hinge Position\n        Default Value : 0 (Right hinged operation)\n      ",
            Item: [
              { label: "Right hinged operation", value: "0" },
              { label: "Left hinged operation", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Door Audio Volume",
            max: "6",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "5",
            write_only: "true",
            Help:
              "\n        Door Audio Volume Level\n        This parameter is a set only parameter. If the value is changed locally on the door lock, this value will not change.\n        Default Value : 5\n      ",
            Item: [
              { label: "No Sound", value: "0" },
              { label: "Level 1", value: "1" },
              { label: "Level 2", value: "2" },
              { label: "Level 3", value: "3" },
              { label: "Level 4", value: "4" },
              { label: "Level 5", value: "5" },
              { label: "Max. Sound Level", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Door ReLock Mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n        Door ReLock Mode\n        Default Value: 1 (Enabled)\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Service PIN Mode",
            max: "9",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n        Service PIN Mode\n        A configuration get command on this parameter returns the latest set parameter value (set by Z-wave).\n        This is a set only value, if changed locally on keypad these values are not changed on Z-wave module. Value 5 and 6 are for future use on door lock.\n        Disabled: Disables both PIN and Service PIN menu on door lock\n\n        Default Value: 0 (Deactivated)\n      ",
            Item: [
              { label: "Deactivated", value: "0" },
              { label: "1 times used", value: "1" },
              { label: "2 times used", value: "2" },
              { label: "5 times used", value: "3" },
              { label: "10 times used", value: "4" },
              { label: "Not used (for future use)", value: "5" },
              { label: "Not used (for future use)", value: "6" },
              { label: "Always valid", value: "7" },
              { label: "12 Hours used", value: "8" },
              { label: "24 Hours used", value: "9" },
              { label: "Disabled (PIN and Service PIN)", value: "254" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Door Lock Model Type",
            max: "150",
            min: "101",
            read_only: "true",
            type: "byte",
            units: "",
            value: "150",
            Help:
              "\n        Door Lock Model Type\n        This configuration is only accepted by configuration get command\n        It is a read only parameter. Default value depends on the door lock model type.\n      ",
          },
          {
            genre: "config",
            index: "8",
            label: "Updater Mode",
            max: "3",
            min: "0",
            type: "list",
            units: "",
            value: "0",
            size: "1",
            Help:
              "\n        Updater Mode\n\n        Enables use of the Updater app.\n        Default Value: 0 (Off, no sound)\n      ",
            Item: [
              { label: "Off (no sound)", value: "0" },
              { label: "On (no sound)", value: "1" },
              { label: "Off", value: "2" },
              { label: "On", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "Master PIN Unlock Mode",
            max: "1",
            min: "0",
            read_only: "true",
            type: "list",
            units: "",
            value: "1",
            size: "1",
            Help: "\n        Master PIN Unlock Mode\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            label: "Retrieve RFID Information",
            type: "int",
            units: "",
            Help:
              "\n        Configuration Report for retriving the RFID information\n        Byte 1: Para1 (msb)\n        Byte 2: Para2\n        Byte 3: Para3\n        Byte 4: Para4 (lsb)\n      ",
          },
        ],
      },
      {
        id: "133",
        Instance: [{ index: "1" }],
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
