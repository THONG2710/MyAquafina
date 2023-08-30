import {Dimensions, ScrollView, StyleSheet, Text, TextProps, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../../../component/header/HeaderComponent';
import {fonts} from '../../../../resource/values/fonts';
import {colors} from '../../../../resource/values/color';
import ItemGift from '../../../../component/Item/ItemGift';
import ButtonImg from '../../../../component/Button/ButtonImg';
import Footer from '../Middle/Footer';

const data = [
  {_id: 1},
  {_id: 2},
  {_id: 3},
  {_id: 4},
  {_id: 5},
  {_id: 6},
  {_id: 7},
];

export interface ProgarmLuresProp extends TextProps {
  navigation: any;
}

const ProgarmLures: React.FC<ProgarmLuresProp> = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleHeader}>THỂ LỆ CHƯƠNG TRÌNH</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.titleHeader2}>
            TÁI SINH CHAI NHỰA - NHẬN QUÀ SỐNG XANH
          </Text>
          <Text style={[styles.txtContent, {fontSize: 11}]}>
            (Diễn ra từ ngày 17/07/2022 đến hết ngày 17/10/2022)
          </Text>
        </View>

        <View style={{marginBottom: 15}}>
          <Text style={styles.txtStep}>1. Đối tượng tham gia:</Text>
          <Text style={styles.txtContent}>
            Chương trình dành cho người chơi là công dân nước Cộng hòa Xã hội
            chủ nghĩa Việt Nam, và trên 18 tuổi.
          </Text>
        </View>

        <View style={{marginBottom: 15}}>
          <Text style={styles.txtStep}>
            2. Nội dung và thể lệ chi tiết chương trình:
          </Text>
          <Text style={styles.txtSmallStep}>
            2.1 Cách thức tham gia chương trình:{' '}
          </Text>
          <Text style={styles.txtContent}>
            Người chơi tham gia chương trình bằng cách thực hiện theo các bước
            dưới đây:
          </Text>
        </View>

        <View style={styles.stepView}>
          <Text style={styles.txtContent}>
            <Text style={styles.txtStep}>Bước 1:</Text> Người chơi đến các địa
            điểm lắp đặt máy thu gom vỏ chai nhựa đã qua sử dụng của Aquafina
            (sau đây được gọi tắt là "
            <Text style={styles.txtStep}>Trạm Tái Sinh</Text>") để tham gia vào
            chương trình “
            <Text style={styles.txtStep}>
              Tái sinh chai nhựa – Nhận quà sống xanh
            </Text>
            ”.{'\n'}Tại mỗi Trạm Tái Sinh sẽ có lắp đặt một màn hình LCD (hoặc
            màn hình điện tử) ghi rõ thông tin hướng dẫn người tham gia thực
            hiện theo các bước tuần tự để hoàn thành một lượt tham gia.
          </Text>
        </View>

        <View style={styles.stepView}>
          <Text style={styles.txtContent}>
            <Text style={styles.txtStep}>Bước 2:</Text> Người chơi nhấn vào nút
            "<Text style={styles.txtStep}>Bắt đầu</Text>" trên màn hình LCD
            (hoặc màn hình điện tử, tùy từng Trạm Tái Sinh) để bắt đầu một lượt
            tham gia.
          </Text>
        </View>

        <View style={styles.stepView}>
          <Text style={styles.txtContent}>
            <Text style={styles.txtStep}>Bước 3:</Text> Người chơi bỏ chai nhựa
            rỗng vào vị trí có ghi "
            <Text style={styles.txtStep}>Nhận chai ở đây</Text>" của máy tại
            Trạm Tái Sinh và chờ hệ thống xử lý.
          </Text>
        </View>

        <View style={[styles.stepView]}>
          <Text style={[styles.txtContent]}>
            <Text style={styles.txtStep}>Bước 4:</Text> Bước 4: Sau khi hệ thống
            xử lý xong, màn hình LCD/điện tử sẽ trả về một mã QR. Người chơi sử
            dụng điện thoại để quét mã QR trên màn hình để dẫn vào website:
            <Text style={styles.txtStep}>http://aquafina.pepsishop.vn/</Text>.
          </Text>
        </View>

        <View style={styles.stepView}>
          <Text style={styles.txtContent}>
            Nếu người chơi lần đầu tham gia, người chơi cần thực hiện đăng ký
            tài khoản bằng cách nhập số điện thoại theo hướng dẫn tại website.
            Hệ thống sẽ gửi mã OTP để xác minh số điện thoại của người chơi.
            Người chơi cần nhập mã OTP để đăng nhập và nhận thông báo về tổng
            điểm Aquafina mình đã tích lũy.
          </Text>

          <Text style={styles.txtContent}>
            Nếu người chơi đã đăng ký tài khoản, thì khi quét mã QR để dẫn về
            website:{' '}
            <Text style={styles.txtStep}>http://aquafina.pepsishop.vn/</Text>,
            người chơi cần nhập số điện thoại để hệ thống ghi nhận điểm Aquafina
            của lượt tham gia mới.{' '}
          </Text>
        </View>

        <Text style={styles.txtContent}>
          Người chơi sẽ được tích lũy điểm Aquafina và điểm Aquafina sẽ được
          tổng kết mỗi tuần theo tỷ lệ quy đổi điểm như sau:{' '}
        </Text>

        <View style={styles.stepView}>
          <Text style={styles.txtContent}>
            <Text style={styles.txtStep}>Chai Aquafina</Text>: người chơi được
            ghi nhận 2 điểm Aquafina cho mỗi vỏ chai Aquafina.
          </Text>
          <Text style={styles.txtContent}>
            <Text style={styles.txtStep}>Không phải chai Aquafina</Text>: người
            chơi được ghi nhận 1 điểm Aquafina cho mỗi vỏ chai.
          </Text>
        </View>

        <View style={styles.stepView}>
          <Text style={styles.txtContent}>
            <Text style={styles.txtStep}>Bước 5</Text>: Mỗi tuần, căn cứ vào số
            lượng người chơi và điểm Aquafina mà người chơi tích lũy được, SPVB
            sẽ công bố bảng xếp hạng{' '}
            <Text style={styles.txtStep}>400 người </Text>
            chơi có điểm Aquafina cao nhất (được hiển thị đầy đủ trên bảng xếp
            hạng tại website{' '}
            <Text style={styles.txtStep}>http://aquafina.pepsishop.vn/</Text> và
            trên fanpage
            <Text style={styles.txtStep}>
              https://www.facebook.com/Aquafinavietnam)
            </Text>{' '}
            vào lúc 12h00’ giờ ngày thứ 7 hàng tuần (hoặc một thời gian khác
            theo quyết định của Công ty TNHH Nước giải khát Suntory PepsiCo Việt
            Nam - SPVB) trong thời gian diễn ra chương trình.
          </Text>

          <Text style={styles.txtStep}>
            *Lưu ý: Người chơi vẫn có thể tiếp tục chơi và tích lũy điểm
            Aquafina ở các tuần tiếp theo để có cơ hội nhận được các phần quà
            trong thời gian diễn ra chương trình.{' '}
          </Text>
        </View>

        <View>
          <Text style={styles.txtSmallStep}>
            2.2 Những quy định về chương trình:
          </Text>
          <Text style={[styles.txtContent, {marginLeft: 20}]}>
            - Số điểm Aquafina có được hàng tuần sẽ không được cộng dồn trong
            suốt thời gian diễn ra chương trình, mà sẽ được tổng kết điểm
            Aquafina vào mỗi tuần.{'\n'}- Quà tặng chỉ được trao bằng hiện vật,
            không có giá trị quy đổi thành tiền mặt.{'\n'}- Do số lượng quà tặng
            có giới hạn, SPVB có quyền thay đổi quà tặng (về kích thước, màu
            sắc, sản phẩm) nhưng đảm bảo sẽ giữ nguyên giá trị đã cam kết.{'\n'}
            - Khi chương trình kết thúc, số điểm Aquafina không được sử dụng sẽ
            không còn giá trị.{'\n'}- Chương trình có thể kết thúc sớm khi số
            lượng quà tặng đã được quy đổi hết.{'\n'}- Người chơi chịu các khoản
            thuế, phí theo quy định của pháp luật khi nhận quà tặng theo chương
            trình này.
          </Text>
        </View>

        <View>
          <Text style={styles.txtSmallStep}>2.3 Số lượng quà tặng:</Text>
          <View style={styles.stepView}>
            <Text style={styles.txtContent}>
              Số lượng quà tặng và điểm Aquafina cần thiết để quy đổi được quy
              định chi tiết theo bảng dưới đây
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginLeft: 16,
            }}>
            {data.map(item => (
              <ItemGift key={item._id} />
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.txtSmallStep}>2.4 Cách thức nhận quà tặng:</Text>
          <View style={styles.stepView}>
            <Text style={styles.txtContent}>
              Mỗi tuần SPVB sẽ công bố danh sách 400 người chơi có điểm Aquafina
              cao nhất và quà tặng trên fanpage Aquafina và trên website
              <Text style={styles.txtStep}>
                {' '}
                http://aquafina.pepsishop.vn/ vào lúc 12h00’ giờ ngày thứ 7 hàng
                tuần trong thời gian diễn ra chương trình
              </Text>
              , người chơi cần cung cấp thông tin cá nhân cho SPVB theo hướng
              dẫn trong vòng 7 ngày kể từ ngày đổi quà để được hướng dẫn nhận
              quà tặng. Việc người chơi cung cấp thông tin cá nhân cho SPVB theo
              mục đích này được hiểu là hành động cho phép SPVB thu thập và sử
              dụng thông tin cá nhân của người chơi theo mục địch đã nêu. Trong
              mọi trường hợp, việc người chơi gửi thông tin nhận quà sau thời
              gian quy định là không hợp lệ, và được xem là người chơi từ bỏ
              việc nhận quà.{'\n\n'}Quà tặng sẽ được vận chuyển đến địa chỉ mà
              người chơi đã cung cấp khi Bên thứ 3 – phụ trách việc vận chuyển
              quà cho SPVB trong vòng 30 ngày kể từ ngày kết thúc chương trình.
              Trong trường hợp bất khả kháng như thiên tai, dịch bệnh, việc vận
              chuyển có thể bị ảnh hưởng và thời gian trao quà sẽ kéo dài hơn so
              với thời hạn đã cam kết nêu trên. SPVB sẽ không chịu trách nhiệm
              nếu thông tin nhận quà mà người chơi cung cấp không chính xác.
              Người chơi có trách nhiệm ký tên trên phiếu giao hàng, biên bản
              bàn giao quà tặng, vận đơn bưu điện hoặc một tài liệu có tên gọi
              khác nhằm xác định đã nhận quà từ chương trình.{'\n\n'}Mỗi cá nhân
              có quyền thắng nhiều hơn 1 giải trong thời gian diễn ra chương
              trình với điều kiện không thắng giải trong cùng 1 thời điểm.
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.txtStep}>3. Quy định chung:</Text>
          <View style={styles.stepView}>
            <Text style={styles.txtContent}>
              SPVB có quyền cập nhật và thay đổi thể lệ chương trình này để phù
              hợp hơn với người chơi và thông báo công khai đến người chơi.
              Trong trường hợp có sự thay đổi về thể lệ cũng như thời gian tổ
              chức, SPVB sẽ thông báo trên trang fanpage của chương trình tại
              <Text style={styles.txtStep}>https://www.facebook.com/Aquafinavietnam</Text> Mọi thắc mắc liên quan
              đến chương trình, người chơi có thể nhắn tin vào hộp thư trang fan
              page của chương trình tại:
              <Text style={styles.txtStep}>https://www.facebook.com/Aquafinavietnam</Text> hoặc gọi điện theo số
              tổng đài 19001220. SPVB chỉ chịu trách nhiệm giải quyết những
              khiếu nại, tranh chấp được gửi đến SPVB trong thời hạn từ lúc bắt
              đầu chương trình cho đến khi hoàn tất việc trao quà tặng cho người
              chơi quy đổi quà tặng hợp lệ theo quy định tại Điều 2.4 nêu trên.
              Trong mọi trường hợp, nếu có tranh chấp về việc thực chương trình
              (bao gồm nhưng không giới hạn việc xác định người chơi chiến thắng
              theo bảng xếp hạng tuần, quy đổi quà tặng hợp lệ), thì quyền quyết
              định cuối cùng sẽ thuộc về SPVB.{'\n'}SPVB cam kết thực hiện đúng và
              hoàn toàn chịu trách nhiệm về chương trình trên theo các qui định
              của pháp luật hiện hành.{'\n'}Phù hợp với qui định của pháp luật, SPVB
              có quyền chấm dứt hoặc huỷ chương trình này trong trường hợp bất
              khả kháng và sẽ thông báo công khai phù hợp với quy định pháp
              luật.{'\n'}Nếu phát hiện có dấu hiệu gian lận, sử dụng công cụ, phần
              mềm hỗ trợ, tài khoản của người chơi sẽ bị khóa đến hết thời gian
              diễn ra chương trình, mọi quà tặng sẽ bị thu hồi.{'\n'}Bằng việc sử
              dụng Các Dịch Vụ, đăng ký một tài khoản với chúng tôi hoặc truy
              cập Nền tảng, người chơi xác nhận và đồng ý rằng người chơi chấp
              nhận các phương pháp, yêu cầu, và/hoặc chính sách được mô tả trong
              Chính sách bảo mật này, và theo đây bạn đồng ý cho phép chúng tôi
              thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn
              cho mục đích thương mại.
            </Text>
          </View>
        </View>

        <View style={styles.end}>
            <ButtonImg btnStyle={{width: Dimensions.get('screen').width/3, zIndex: 10,}} text='Đã hiểu'/>
        </View>

        {/* footer */}
        <Footer navigation={navigation}/>
      </ScrollView>
    </View>
  );
};

export default ProgarmLures;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 10,
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  titleHeader: {
    width: '100%',
    fontFamily: fonts.primaryFont,
    color: colors.BLACK,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    marginLeft: 16,
  },

  titleHeader2: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  txtContent: {
    fontFamily: fonts.primaryFont,
    fontSize: 12,
    fontStyle: 'normal',
    color: colors.GRAY,
    lineHeight: 20,
    marginLeft: 16,
  },

  txtStep: {
    width: '100%',
    fontFamily: fonts.primaryFont,
    fontSize: 13,
    color: colors.GRAY,
    fontWeight: 'bold',
    marginLeft: 16,
  },

  txtSmallStep: {
    width: '100%',
    fontFamily: fonts.primaryFont,
    fontSize: 13,
    color: colors.GRAY,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: 16,
  },

  stepView: {
    marginBottom: 10,
    marginLeft: 26,
  },

  end: {
    width: '100%',
    marginVertical: 20,
    marginLeft: 16,
  }
});
