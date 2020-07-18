import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0230:0001:0003",
            name: "OzwInfoPage",
          },
          { text: "images/idlock/idlock101.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1512/",
            id: "0001",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "Exclusion – (Puts your device in exclusion mode)\n• Push and hold button until all LEDs on keypad activates. (with ID Lock in an unlocked state)\n• Release button and press “8” on keypad.\nExclusion mode starts immediately. LED indicator below logo signals this by flashing blue.",
            name: "ExclusionDescription",
          },
          { text: "01A", id: "0001", name: "Identifier", type: "0003" },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              'Device reset – (This will reset RF interface module to factory default settings)\nWarning: Please do only proceed with the following reset procedure, if primary network controller is missing or otherwise\ninoperable.\n\nRESET Z-WAVE MODULE:\nActivate doorlock service menu, by holding inside push button for 5sec while door is in OPEN state.\n\nOutside touchpanel activates > Push "0"\n\nFACTORY RESET DOORLOCK FIRMWARE:\n1. Push innside pushbutton continously for five Seconds after inserting batteries.\n2. Receive reset sound\n3. Receive confirmation sound',
            name: "ResetDescription",
          },
          {
            text: "Activate by touching numpad with two fingers or handpalm",
            name: "WakeupDescription",
          },
          {
            text:
              "Inclusion – (Puts your device in inclusion mode)\n• Push and hold button until all LEDs on keypad activates. (with ID Lock in an unlocked state)\n• Release button and press “8” on keypad.\nInclusion mode starts immediately. LED indicator below logo signals this by flashing blue.",
            name: "InclusionDescription",
          },
          {
            text:
              "UART console communication module turns your ID Lock digital doorlock into a Z-Wave Plus enabled digital doorlock.\n\nIt enables your ID Lock to operate in a Z-Wave network with numerous access control funtions and notifications.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1512/IDL Operational Manual EN v1.2.pdf",
            name: "ProductManual",
          },
          { text: "ID Lock Z-Wave module", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1512/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
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
            label: "Door Lock Mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            Help:
              "\n        \tDoor Lock Mode\n\t\tAutolock Mode, Manuallock mode, Activate Away Mode, Deactivate Away Mode.\n\t\tDefault Value : 1 ( Disable Away / Auto Lock Mode )\n      ",
            Item: [
              { label: "Disable Away, Manual Lock", value: "0" },
              { label: "Disable Away, Auto Lock", value: "1" },
              { label: "Enable Away, Manual Lock", value: "2" },
              { label: "Enable Away, Auto Lock", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "RFID Registration Configuration",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            Help:
              "\n\t\tRFID Registration Configuration\n        \tIDLocks can use up to 50 RFID cards. In order to use a RFID, RFID has to be registered by z-wave configuration command class. \n\t\tConfiguration Set in case of starting to register from backend side ( Ex. App)\n      ",
            Item: [
              {
                label: "Begin RFID Registering mode on the door lock",
                value: "0x01",
              },
              { label: "RFID Database clear", value: "0x07" },
              { label: "RFID Registering mode stop", value: "0x08" },
            ],
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
