import { dayjs, type Dayjs } from '@/shared/adpater/dayjs.ts';
import { FormItemProps as AntdFormItemProps, Form as AntdForm } from 'antd';

import type { DateRange } from '@/shared/domain/DateRange.ts';

type Nullish = undefined | null;
type OriginValidValue = [Dayjs, Dayjs];
type OriginValue = Nullish | OriginValidValue;
type TransformedValue = Nullish | DateRange;

/**
 * Antd <RangePicker /> 內建用 dayjs 處理日期時間，所以需將 dayjs 的使用封裝起來，
 * 讓 client 只須傳入或取得原生 Date 物件。
 * 作法：將原始值的型別 OriginValue，轉換成 TransformedValue
 */
function FormItemForRangePicker(props: AntdFormItemProps) {
  return (
    <AntdForm.Item
      getValueProps={value => ({
        value: RangePickerValueMapper.toOrigin(value)
      })}
      getValueFromEvent={value => RangePickerValueMapper.toTransformed(value)}
      {...props}
    />
  );
}

class RangePickerValueMapper {
  static toOrigin(value: TransformedValue): OriginValue {
    if (value == null) return value;

    return [dayjs(value.start), dayjs(value.end)];
  }

  static toTransformed(value: OriginValue): TransformedValue {
    if (value == null) return value;

    const [startDayjs, endDayjs] = value;
    return {
      start: startDayjs.toDate(),
      end: endDayjs.toDate()
    };
  }
}

export default FormItemForRangePicker;
