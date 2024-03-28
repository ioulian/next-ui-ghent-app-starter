/* eslint-disable i18next/no-literal-string */

import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import sampleSvgSprite from "@tabler/icons/arrow-right-circle.svg";
import iconChevronRight from "@tabler/icons/chevron-right.svg";
import iconChevronLeft from "@tabler/icons/chevron-left.svg";
import iconChevron from "@tabler/icons/chevron-right.svg";

import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import Text from "@/components/common/text/Text";
import Pagination from "@/components/common/pagination/Pagination";
import Test from "@/app/[locale]/_components/Test";
import ButtonGroup from "@/components/common/button-group/ButtonGroup";
import Button from "@/components/common/button/Button";
import Ellipsis from "@/components/common/ellipsis/Ellipsis";
import Expandable from "@/components/common/expandable/Expandable";
import { generateSanitizedMetadata } from "@/utils/next";
import Test2 from "@/app/[locale]/_components/Test2";
import Popover from "@/components/common/floating-ui/popover/Popover";
import PopoverTrigger from "@/components/common/floating-ui/popover/PopoverTrigger";
import PopoverContent from "@/components/common/floating-ui/popover/PopoverContent";
import PopoverHeading from "@/components/common/floating-ui/popover/PopoverHeading";
import PopoverDescription from "@/components/common/floating-ui/popover/PopoverDescription";
import PopoverClose from "@/components/common/floating-ui/popover/PopoverClose";
import Tooltip from "@/components/common/floating-ui/tooltip/Tooltip";
import TooltipTrigger from "@/components/common/floating-ui/tooltip/TooltipTrigger";
import TooltipContent from "@/components/common/floating-ui/tooltip/TooltipContent";
import Dialog from "@/components/common/floating-ui/dialog/Dialog";
import DialogTrigger from "@/components/common/floating-ui/dialog/DialogTrigger";
import DialogContent from "@/components/common/floating-ui/dialog/DialogContent";
import DialogHeading from "@/components/common/floating-ui/dialog/DialogHeading";
import DialogDescription from "@/components/common/floating-ui/dialog/DialogDescription";
import DialogClose from "@/components/common/floating-ui/dialog/DialogClose";
import Dropdown from "@/components/common/floating-ui/dropdown/Dropdown";
import DropdownMenuItem from "@/components/common/floating-ui/dropdown/DropdownMenuItem";
import ButtonGroupSeparator from "@/components/common/button-group/ButtonGroupSeparator";

import styles from "./_styles/styles.module.css";

type Props = Readonly<{
  params: { locale: string };
}>;

export const generateMetadata = generateSanitizedMetadata<Props>(async ({ params: { locale } }) => {
  const t = await getTranslations({ locale, namespace: "pages.home.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
});

const Page: NextPage<Props> = ({}) => {
  const t = useTranslations("pages");

  return (
    <div>
      <div className={styles.test}>{t("home.title")}</div>
      <Text>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <p>Paragraph 2</p>
        <ol>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>adsf</li>
        </ol>
      </Text>
      <Test />
      <Dropdown trigger={<Button>Open dropdown</Button>}>
        <DropdownMenuItem typeaheadKey="Undo">
          <Button variant="secondary">Undo</Button>
        </DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Redo">
          <Button variant="secondary">Redo</Button>
        </DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Cut" disabled>
          <Button>Cut</Button>
        </DropdownMenuItem>
        <Dropdown
          trigger={<Button iconAfter={<SvgSprite src={iconChevron} />}>Copy as</Button>}
          typeaheadKey="Copy as"
        >
          <DropdownMenuItem typeaheadKey="Text">
            <Button>Text</Button>
          </DropdownMenuItem>
          <DropdownMenuItem typeaheadKey="Video">
            <Button>Video</Button>
          </DropdownMenuItem>
          <Dropdown
            trigger={<Button iconAfter={<SvgSprite src={iconChevron} />}>Image</Button>}
            typeaheadKey="Image"
          >
            <DropdownMenuItem typeaheadKey=".png">
              <Button>.png</Button>
            </DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".jpg">
              <Button>.jpg</Button>
            </DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".svg">
              <Button>.svg</Button>
            </DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".gif">
              <Button>.gif</Button>
            </DropdownMenuItem>
          </Dropdown>
          <DropdownMenuItem typeaheadKey="Audio">
            <Button>Audio</Button>
          </DropdownMenuItem>
        </Dropdown>
        <Dropdown trigger={<Button>Share</Button>} typeaheadKey="Share">
          <DropdownMenuItem typeaheadKey="Mail">
            <Button>Mail</Button>
          </DropdownMenuItem>
          <DropdownMenuItem typeaheadKey="Instagram">
            <Button>Instagram</Button>
          </DropdownMenuItem>
        </Dropdown>
      </Dropdown>
      <Dialog>
        <DialogTrigger>Open dialog</DialogTrigger>
        <DialogContent withCloseButton>
          <DialogHeading>My dialog heading</DialogHeading>
          <DialogDescription>My dialog description</DialogDescription>
          <DialogClose>Close</DialogClose>
        </DialogContent>
      </Dialog>
      <Tooltip>
        <TooltipTrigger>Open tooltip</TooltipTrigger>
        <TooltipContent>My tooltip</TooltipContent>
      </Tooltip>
      <Popover>
        <PopoverTrigger>Open popover</PopoverTrigger>
        <PopoverContent withCloseButton>
          <PopoverHeading>My popover heading</PopoverHeading>
          <PopoverDescription>My popover description</PopoverDescription>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>
      <ButtonGroup>
        <Button
          iconBefore={<SvgSprite src={iconChevronLeft} title="test-title" />}
          iconAfter={<SvgSprite src={iconChevronRight} title="test-title" />}
        >
          Primary Action
        </Button>
        <Button variant="secondary">Secondary Action</Button>
        <ButtonGroupSeparator />
        <Button size="base" variant="simple">
          Cancel
        </Button>
      </ButtonGroup>
      <Ellipsis>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta dolor mi, at
          venenatis urna elementum a. Etiam quis diam non massa tempor blandit at nec nibh.
          Pellentesque non magna ac quam cursus mollis. Nunc urna dui, lobortis non nulla tempus,
          varius
        </p>
      </Ellipsis>
      <Expandable summary="Click">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta dolor mi, at
          venenatis urna elementum a. Etiam quis diam non massa tempor blandit at nec nibh.
          Pellentesque non magna ac quam cursus mollis. Nunc urna dui, lobortis non nulla tempus,
          varius
        </p>
      </Expandable>
      <Pagination
        {...{
          breakLabel: "...",
          nextLabel: <SvgSprite src={iconChevronRight} />,
          pageRangeDisplayed: 5,
          pageCount: 30,
          previousLabel: <SvgSprite src={iconChevronLeft} />,
        }}
      />
      <Ellipsis>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta dolor mi, at
          venenatis urna elementum a. Etiam quis diam non massa tempor blandit at nec nibh.
          Pellentesque non magna ac quam cursus mollis. Nunc urna dui, lobortis non nulla tempus,
          varius
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta dolor mi, at
          venenatis urna elementum a. Etiam quis diam non massa tempor blandit at nec nibh.
          Pellentesque non magna ac quam cursus mollis. Nunc urna dui, lobortis non nulla tempus,
          varius
        </p>
      </Ellipsis>

      <Test2 />

      <SvgSprite src={sampleSvgSprite} />
    </div>
  );
};

export default Page;
