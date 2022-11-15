# Props

- có thể dùng mà không cần định nghĩa

# Nên dùng `propsType` để kiểm tra đúng loại dữ liệu cho props

// declare all props used in this component

ColorBox.propTypes = {
color: PropTypes.string.isRequired,
rounded: PropTypes.bool,
};
