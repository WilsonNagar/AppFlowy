import { CellIdentifier } from '../../stores/effects/database/cell/cell_bd_svc';
import { CellCache } from '../../stores/effects/database/cell/cell_cache';
import { FieldController } from '../../stores/effects/database/field/field_controller';
import { FieldType } from '../../../services/backend';
import { BoardOptionsCell } from './BoardOptionsCell';
import { BoardDateCell } from './BoardDateCell';
import { BoardTextCell } from './BoardTextCell';
import { BoardUrlCell } from '$app/components/board/BoardUrlCell';
import { BoardCheckboxCell } from '$app/components/board/BoardCheckboxCell';

export const BoardCell = ({
  cellIdentifier,
  cellCache,
  fieldController,
}: {
  cellIdentifier: CellIdentifier;
  cellCache: CellCache;
  fieldController: FieldController;
}) => {
  return (
    <>
      {cellIdentifier.fieldType === FieldType.SingleSelect ||
      cellIdentifier.fieldType === FieldType.MultiSelect ||
      cellIdentifier.fieldType === FieldType.Checklist ? (
        <BoardOptionsCell
          cellIdentifier={cellIdentifier}
          cellCache={cellCache}
          fieldController={fieldController}
        ></BoardOptionsCell>
      ) : cellIdentifier.fieldType === FieldType.DateTime ? (
        <BoardDateCell
          cellIdentifier={cellIdentifier}
          cellCache={cellCache}
          fieldController={fieldController}
        ></BoardDateCell>
      ) : cellIdentifier.fieldType === FieldType.URL ? (
        <BoardUrlCell
          cellIdentifier={cellIdentifier}
          cellCache={cellCache}
          fieldController={fieldController}
        ></BoardUrlCell>
      ) : cellIdentifier.fieldType === FieldType.Checkbox ? (
        <BoardCheckboxCell
          cellIdentifier={cellIdentifier}
          cellCache={cellCache}
          fieldController={fieldController}
        ></BoardCheckboxCell>
      ) : (
        <BoardTextCell
          cellIdentifier={cellIdentifier}
          cellCache={cellCache}
          fieldController={fieldController}
        ></BoardTextCell>
      )}
    </>
  );
};
