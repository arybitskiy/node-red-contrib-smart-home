import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/033F:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/august/asl-03.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2624/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2624/August Z-Wave Required Documentation.pdf",
            name: "ProductManual",
          },
          {
            text: "Any operation (manual, RF, etc.) will wake up the lock.",
            name: "WakeupDescription",
          },
          { text: "August Smart Lock Rev 3", name: "Name" },
          {
            text:
              "In order to include the August Smart Lock on to a Z-Wave network the user will have to do the following:\n1. Open the August app\n2. Go to the Lock Settings screen\n3. Select Z-Wave Settings\n4. Select Add To A Z-Wave Network\n5. Put the controller into inclusion mode and select My Hub is in Inclusion Mode on the August app",
            name: "InclusionDescription",
          },
          {
            text:
              "In order to exclude  the August Smart Lock from a Z-Wave network the user will have to do the following:\n1. Open the August app\n2. Go to the Lock Settings screen\n3. Select Z-Wave Settings\n4. Select Remove Z-Wave Device\n5. Put the controller into exclusion mode and select My Hub is in Exlusion Mode on the August app",
            name: "ExclusionDescription",
          },
          {
            text:
              "Give your customer total control over their front door, from anywhere. The August Smart Lock Pro is the leading Z-Wave Plus retrofit smart lock. You can lock and unlock your door, create virtual keys for guests, and keep track of who comes and goes with a 24/7 activity log, all from your iOS or Android smartphone. The August Smart Lock Pro features Z-Wave Plus and BLE and it is the only lock to support the three leading voice-assistants, Siri, Google Assistant, and Amazon Alexa. The lock quickly installs on the inside of your door with just a screwdriver. Keep your exterior door hardware exactly as it is and use your traditional key any\ntime.",
            name: "Description",
          },
          { text: "ASL-03", id: "0001", name: "Identifier", type: "0001" },
          {
            text:
              "In order to reset the August Smart Lock the user will have to do the following:\n1. Open the August app\n2. Go to the Lock Settings screen\n3. Select Z-Wave Settings\n4. Select Remove Z-Wave device\n5. Select My Hub Is No Longer Working\n6. Caution: Resetting a Z-Wave device without telling the hub can cause performance issues. Use this procedure only when the Z-Wave hub is missing or otherwise inoperable. \n7. Select Reset Z-Wave Device\n8. On the Reset Z-Wave Device? prompt select Reset",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2624/xml",
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
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Doorlock OP", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
